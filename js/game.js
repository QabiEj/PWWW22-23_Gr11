let pen = document.getElementById("canvas").getContext("2d");
let rightButton = document.getElementById("rightButton");
let leftButton = document.getElementById("leftButton");
let upButton = document.getElementById("upButton");
let downButton = document.getElementById("downButton");


const Player = function (name, color, pen) {
    this.name = name;
    this.color = color;
    this.xPos = 0;
    this.yPos = 775;
    this.m = 40;
    this.pen= pen;

}

Player.prototype.draw = function () {
    let pen = this.pen;
    const vBefore = pen.fillStyle;
    pen.fillStyle = this.color;
    pen.fillRect(this.xPos, this.yPos, this.m, this.m);
    pen.fillStyle = vBefore;
}

Player.prototype.move = function (position) {

    if (position == "right" && this.xPos + this.m + 20 < 801)
        this.xPos += 20;
    else {
        if (position == "left" && this.xPos - 20 > -20)
            this.xPos -= 20;
        else {
            if (position == "up" && this.yPos - 20 > -20)
                this.yPos -= 20;
            else
                if (position == "down" && this.yPos + this.m + 20 < 801)
                    this.yPos += 20;
        }
    }

}

const Cube = function (size, x, y) {
    this.m = size;
    this.x = x;
    this.y = y;
}
Cube.prototype.draw = function (pen) {
    pen.fillStyle = "#fe7634";
    pen.fillRect(this.x, this.y, this.m, this.m);
}
Cube.prototype.hasObstacle = function (xPos, yPos) {
    let ans = false;

    if (Math.abs(xPos - this.x) < this.m)
        if (Math.abs(yPos - this.y) < this.m)
            ans = true;

    return ans;
}

Cube.prototype.move= function (position) {
    if (position == "right")
        this.x += 20;
    else {
        if (position == "left") { this.x -= 20; }
        else {
            if (position == "up")
                this.y -= 20;
            else
                if (position == "down")
                    this.y += 20;
        }
    }

    this.draw(pen);
}


const Controller = function (width, height) {
    this.width = width;
    this.height = height;
    this.player = new Player("Matt", "white", pen);
    let win = [0, 775];
    const k1 = new Cube(40, Math.random() * 775, Math.random() * 775);
    const k2 = new Cube(40, Math.random() * 775, Math.random() * 775);
    const k3 = new Cube(40, Math.random() * 775, Math.random() * 775);
    const k4 = new Cube(40, Math.random() * 775, Math.random() * 775);
    const k5 = new Cube(40, Math.random() * 775, Math.random() * 775);
    const k6 = new Cube(40, Math.random() * 775, Math.random() * 775);
    const k7 = new Cube(40, Math.random() * 775, Math.random() * 775);
    const k8 = new Cube(40, Math.random() * 775, Math.random() * 775);
    const k9 = new Cube(40, Math.random() * 775, Math.random() * 775);
    const k10 = new Cube(40, Math.random() * 775, Math.random() * 775);

    this.array = [k1, k2, k3, k4, k5, k6, k7, k8, k9, k10];

}

Controller.prototype.start = function () {


    this.drawField();
    this.player.draw();

    for (let i = 0; i < this.array.length; i++) {
        this.array[i].draw(pen);
    }
}


var img = new Image();
img.src = "img/header/logo.png";

img.onload = function () {
    pen.drawImage(img, 730, 0.5,70,70);
}
Controller.prototype.drawField = function () {
    var img = new Image();
    img.src = "img/header/logo.png";
    pen.fillStyle="black";
   setInterval(this, 1000);
    pen.fillRect(0, 0, this.width, this.height);
    pen.drawImage(img, 730, 0.5,70,70);
    pen.strokeStyle = "black";
    pen.strokeRect(0, 0, this.width, this.height);

}
Controller.prototype.update = function (position) {

    this.drawField();

    for (let i = 0; i < this.array.length; i++) {
        this.array[i].draw(pen);
    }
    this.player.move(position);

    let ans = false;
    for (let i = 0; i < this.array.length; i++) {
        if (this.array[i].hasObstacle(this.player.xPos, this.player.yPos))
            ans = true;
    }
    if (ans) {
        if (position == "left")
            position = "right";
        else {
            if (position == "right")
                position = "left";
            else {
                if (position == "up")
                    position = "down";
                else
                    if (position == "down")
                        position == "up";
            }
        }
        this.player.move(position);
        this.player.draw();
    }
    else {
        this.player.move(position);
        this.player.draw();
    }

    if (this.checkWin()) {
        l = new Controller(800, 800);
        l.start();
    }


}

Controller.prototype.checkWin = function () {

    if (this.player.xPos >= 700 && this.player.yPos <= 0) {
        alert("You won!");
        return true;
    }
}


let l = new Controller(800, 800);

l.start();

rightButton.onclick = function () {
    l.update("right");
}
leftButton.onclick = function () {
    l.update("left");
}
upButton.onclick = function () {
    l.update("up");
}
downButton.onclick = function () {
    l.update("down");
}

window.addEventListener("keydown", event => {

    switch (event.keyCode) {
        case 37: l.update("left"); break;
        case 38: l.update("up"); break;
        case 39: l.update("right"); break;
        case 40: l.update("down"); break;
    }

})

