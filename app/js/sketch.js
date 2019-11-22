var ox, oy, nx, ny, spd, spd0, spd00, spd00, spd000, spd0000;
var angle = 0, oldAngle = 0, angleDiff, weight, theCanvas;

function Dragged2() {
    var adj = 0;
    var minWeight = 2;
    var maxWeight = 30;
    var weightIncrement = 4;
    var num, size, distance;
    if (typeof ox === 'undefined') {
        ox = mouseX;
        oy = mouseY;
    }
    nx = mouseX;
    ny = mouseY;
    spd = dist(ox, oy, nx, ny);
    avgSpd = (spd + spd0 + spd00 + spd000 + spd0000) / 5;
    if (between2(avgSpd, 1, 2)) { weight += (weightIncrement * 2) }
    if (between2(avgSpd, 3, 5)) { weight += (weightIncrement) }
    if (between2(avgSpd, 6, 40)) { weight -= weightIncrement }
    if (between2(avgSpd, 61, 999)) { weight -= (weightIncrement * 2) }
    if (avgSpd < 1) { weight += 1 }

    weight = Math.max(weight, minWeight);
    weight = Math.min(weight, maxWeight);
    stroke(255, 250);
    strokeWeight(weight);
    line(ox, oy, nx, ny);

    angle = atan2(ny - oy, nx - ox);
    angleDiff = abs(angle, oldAngle);
    push();
    noStroke();
    fill(255, 254);
    num = Number(angleDiff > 1);
    distance = spd * random(1);
    for (let i = 0; i < 4; i++) {
        size = random(0.5, distance / 8);
        ellipse(wobble2(nx, distance), wobble2(ny, distance), size, size);
    }
    pop();

    oldAngle = angle;
    ox = nx;
    oy = ny;
    spd0000 = spd000;
    spd000 = spd00;
    spd00 = spd0;
    sped0 = spd;
}

function wobble2(num, mag) {
    return random(0 - mag, mag) + num;
}

function between2(num, a, b) {
    return (num >= a && num <= b);

}


function setup() {
    createCanvas(800, 800);
    background(0);
}

function draw() {
    document.body.onmousedown = Dragged2

    // background(0);

}