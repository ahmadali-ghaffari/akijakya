'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

for (let i:number = 0; i < 19; i++) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(10+i*10, 10+i*10, 10, 10);
}