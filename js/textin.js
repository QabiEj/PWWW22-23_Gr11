var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("HTML GAME",10,50);
ctx.beginPath();              
ctx.lineWidth = "5";
ctx.strokeStyle = "green";  // Green path
ctx.moveTo(0, 75);
ctx.lineTo(250, 75);
ctx.stroke();  // Draw it
var grd = ctx.createLinearGradient(0,0,200,10);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,60,300,10);

window.onload = function() {
    var canvas = document.getElementById("myCanvas1");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("robot");
   ctx.drawImage(img, 10, 10);
};