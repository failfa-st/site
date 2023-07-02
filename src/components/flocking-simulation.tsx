import React, { useEffect, useRef } from "react";

const maxSpeed = 1;
const boidCount = 100;
const boidSize = 20;
const boidVelocity = 10;
const perceptionRadius = 30;
const alignmentForce = 1.0;
const cohesionForce = 2.0;
const separationForce = 0.5;
const boundaryForceWeight = 0.25;
const margin = 75;
const brightnessScale = 10; // 10 nearby boids correspond to maximum brightness
const brightnessTransitionSmoothness = 0.1; // adjust this to control the speed of transition, lower values are slower

interface Vector {
	x: number;
	y: number;
}

interface Boid {
	position: Vector;
	velocity: Vector;
	brightness: number;
	nearbyBoids: number;
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

	if (x < 0) x = width + v.x;
	else if (x > width) x = v.x - width;

	if (y < 0) y = height + v.y;
	else if (y > height) y = v.y - height;

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

				boidsArray[index] = { position, velocity, brightness, nearbyBoids }; // update boid with new brightness

				const angleStep = (2 * Math.PI) / 6;

				let color = `rgba(150, 150, 150, ${brightness})`;

				ctx.shadowBlur = 10;
				ctx.shadowColor = color;
				ctx.fillStyle = color;

				ctx.beginPath();
				for (let i = 0; i < 6; i++) {
					const angle = i * angleStep;
					const x = position.x + boidSize * Math.cos(angle);
					const y = position.y + boidSize * Math.sin(angle);
					if (i === 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}
				}
				ctx.closePath();
				ctx.fill();
			});

			requestAnimationFrame(draw);
		}

		draw();
	}, []);

	return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0 }} />;
}
