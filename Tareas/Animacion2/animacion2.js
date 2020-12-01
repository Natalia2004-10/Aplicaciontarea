let canvas = document.querySelector("#miCanvas");
let ctx = canvas.getContext("2d");

function loadImages(sources, callback) {
  let images = {};
  let loadedImages = 0;

  let numImages = Object.keys(sources).length;

  for (let src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      loadedImages++;
      if (loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
var sources = {
  cohete:
    "https://pngimage.net/wp-content/uploads/2018/05/cohete-png.png",
  planeta: "https://images.vexels.com/media/users/3/152418/isolated/preview/098366e6994dd75ab46b47cd27b2c9d4-icono-de-planeta-tierra-by-vexels.png",
  meteorito:
    "https://images.vexels.com/media/users/3/205453/isolated/preview/8f201f80e3a4b7d49db49a90332430d7-orbiting-meteor-illustration-by-vexels.png",
};
let x = 50;
let y = 500;
let dX = 8;
let dY = 5;
let vX = 20;
let v0Y = -40;
let aY = 2;
let t = 0;
let x0 = 0;
let y0 = 550;
function draw(images) {
  x0 = x0 + dX;
  y0 = y0 - dY;
  t += 1;
  x = 0 + vX * t;
  y = 400 + v0Y * t + (aY * Math.pow(t, 2)) / 2;
  ctx.clearRect(0, 0, 1000, 600);
  ctx.drawImage(images.meteorito, x, y, 80, 80);
  ctx.drawImage(images.planeta, 375, 152.5, 250, 250);
  ctx.drawImage(images.cohete, x0, y0, 50, 50);
}
function run(images) {
  window.setInterval(function () {
    draw(images);
  }, 30);
}
loadImages(sources, run);