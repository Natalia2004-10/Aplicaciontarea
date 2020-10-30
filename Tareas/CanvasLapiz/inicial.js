let canvas = document.querySelector("#inicial");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#FFB6C1"
ctx.beginPath();
ctx.arc(200, 100, 50, 0, Math.PI, true);
ctx.stroke();
ctx.fill();

ctx.fillStyle = "#e3e4e5"
ctx.fillRect(150, 100, 100, 50);

ctx.fillStyle = "#FFDB58"
ctx.fillRect(150, 150, 100, 350);

ctx.fillStyle = "#ffecb8"
ctx.beginPath();
ctx.moveTo(150, 500);
ctx.lineTo(200, 599);
ctx.lineTo(250, 500);
ctx.lineTo(150, 500);
ctx.stroke();
ctx.fill();


ctx.fillStyle = "black"
ctx.beginPath();
ctx.arc(200, 598, 2, 0, Math.PI*2, true);
ctx.stroke();
ctx.fill();


ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(250, 100);
ctx.lineTo(250, 500);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 500);
ctx.lineTo(150, 150);
ctx.lineTo(250, 150);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150,100);
ctx.lineTo(150, 150);
ctx.stroke();



