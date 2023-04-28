export const base = {
	default: `
const canvas = document.querySelector('canvas');const ctx = canvas.getContext('2d');function draw(){const FPS = 60;setTimeout(requestAnimationFrame(draw),1000/FPS)}draw();
	`.trim(),
};
