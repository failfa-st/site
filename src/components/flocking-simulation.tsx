import React, { useState, useEffect, useRef } from "react";

const maxSpeed = 0.25;
const boidCount = 300;
const boidSize = 10;
const boidVelocity = 25;
const perceptionRadius = 20;
const alignmentForce = 1.0;
const cohesionForce = 1.0;
const separationForce = 1.0;
const boundaryForceWeight = 2;
const margin = 0;
const brightnessScale = 20; // 20 nearby boids correspond to maximum brightness
const brightnessTransitionSmoothness = 0.05; // adjust this to control the speed of transition, lower values are slower
const rotationSpeed = 0.025;

interface Vector {
	x: number;
	y: number;
}

interface Boid {
	position: Vector;
	velocity: Vector;
	brightness: number;
	nearbyBoids: number;
	angle: number;
}

function getFlockBehaviors(
	boid: Boid,
	index: number,
	boids: Boid[],
	width: number,
	height: number
) {
	let alignment: Vector = { x: 0, y: 0 };
	let cohesion: Vector = { x: 0, y: 0 };
	let separation: Vector = { x: 0, y: 0 };
	let boundaryForce: Vector = { x: 0, y: 0 };
	let nearbyBoids = 0;

	boids.forEach((otherBoid, otherIndex) => {
		if (otherIndex !== index) {
			let d = distance(boid.position, otherBoid.position);

			if (d < perceptionRadius) {
				alignment = addVectors(alignment, otherBoid.velocity);
				cohesion = addVectors(cohesion, otherBoid.position);
				separation = subtractVectors(
					separation,
					subtractVectors(otherBoid.position, boid.position)
				);

				nearbyBoids++;
			}
		}
	});

	if (boid.position.x < margin) boundaryForce.x = margin - boid.position.x;
	if (boid.position.y < margin) boundaryForce.y = margin - boid.position.y;
	if (width - boid.position.x < margin) boundaryForce.x = -(margin - (width - boid.position.x));
	if (height - boid.position.y < margin) boundaryForce.y = -(margin - (height - boid.position.y));

	if (nearbyBoids > 0) {
		alignment = divideVector(alignment, nearbyBoids);
		cohesion = divideVector(subtractVectors(cohesion, boid.position), nearbyBoids);
		separation = divideVector(separation, nearbyBoids);
	}

	alignment = multiplyVector(alignment, alignmentForce);
	cohesion = multiplyVector(cohesion, cohesionForce);
	separation = multiplyVector(separation, separationForce);
	boundaryForce = multiplyVector(boundaryForce, boundaryForceWeight);

	return { alignment, cohesion, separation, boundaryForce, nearbyBoids };
}

function addVectors(...vectors: Vector[]): Vector {
	let x = vectors.reduce((total, v) => total + v.x, 0);
	let y = vectors.reduce((total, v) => total + v.y, 0);
	return { x, y };
}

function subtractVectors(a: Vector, b: Vector): Vector {
	return { x: a.x - b.x, y: a.y - b.y };
}

function multiplyVector(v: Vector, scalar: number): Vector {
	return { x: v.x * scalar, y: v.y * scalar };
}

function divideVector(v: Vector, scalar: number): Vector {
	return multiplyVector(v, 1 / scalar);
}

function distance(a: Vector, b: Vector) {
	let dx = a.x - b.x;
	let dy = a.y - b.y;
	return Math.sqrt(dx * dx + dy * dy);
}

function limitMagnitude(v: Vector, max: number): Vector {
	let magnitude = Math.sqrt(v.x * v.x + v.y * v.y);
	if (magnitude > max) {
		return multiplyVector(v, max / magnitude);
	} else {
		return v;
	}
}

function wrapPosition(v: Vector, width: number, height: number): Vector {
	let x = v.x;
	let y = v.y;
	const margin = 50;

	if (x < -margin) x = width + v.x + margin;
	else if (x > width + margin) x = v.x - width - margin;

	if (y < -margin) y = height + v.y + margin;
	else if (y > height + margin) y = v.y - height - margin;

	return { x, y };
}

export default function FlockingSimulation() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const boids = useRef<Boid[]>([]);

	const handleResize = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		// Initialize boids
		boids.current = [];
		for (let i = 0; i < boidCount; i++) {
			boids.current.push({
				position: {
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
				},
				velocity: {
					x: (Math.random() * 2 - 1) * boidVelocity,
					y: (Math.random() * 2 - 1) * boidVelocity,
				},
				brightness: 0,
				nearbyBoids: 0,
				angle: Math.random() * Math.PI * 2,
			});
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		function draw() {
			if (!canvas || !ctx) return;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			boids.current.forEach((boid, index, boidsArray) => {
				let { alignment, cohesion, separation, boundaryForce, nearbyBoids } =
					getFlockBehaviors(boid, index, boidsArray, canvas.width, canvas.height);

				alignment = limitMagnitude(alignment, maxSpeed);
				cohesion = limitMagnitude(cohesion, maxSpeed);
				separation = limitMagnitude(separation, maxSpeed);
				boundaryForce = limitMagnitude(boundaryForce, maxSpeed);

				let velocity = limitMagnitude(
					addVectors(boid.velocity, alignment, cohesion, separation, boundaryForce),
					maxSpeed
				);
				let position = wrapPosition(
					addVectors(boid.position, velocity),
					canvas.width,
					canvas.height
				);

				const smoothness = brightnessTransitionSmoothness;
				let targetBrightness = Math.min(1, nearbyBoids / brightnessScale); // target brightness
				let brightness =
					boid.brightness + smoothness * (targetBrightness - boid.brightness); // slowly transition towards target brightness

				let targetAngle = Math.atan2(velocity.y, velocity.x) + Math.PI / 2;

				// Interpolate between the current angle and the target angle based on the rotation speed
				let angle = boid.angle + rotationSpeed * (targetAngle - boid.angle);

				boidsArray[index] = { position, velocity, brightness, nearbyBoids, angle }; // update boid with new brightness

				const angleStep = (2 * Math.PI) / 6;

				let color = `rgba(150, 150, 150, ${brightness})`;

				ctx.shadowBlur = 10;
				ctx.shadowColor = color;
				ctx.fillStyle = color;

				ctx.save(); // save the current context state
				ctx.translate(position.x, position.y); // move context to boid position
				ctx.rotate(angle); // rotate context by angle

				ctx.beginPath();
				for (let i = 0; i < 6; i++) {
					const angle = i * angleStep;
					const x = boidSize * Math.cos(angle); // don't need to add position here
					const y = boidSize * Math.sin(angle); // don't need to add position here
					if (i === 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}
				}
				ctx.closePath();
				ctx.fill();

				ctx.restore(); // restore the context state to its original form
			});

			requestAnimationFrame(draw);
		}

		draw();
	}, []);

	return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0 }} />;
}
