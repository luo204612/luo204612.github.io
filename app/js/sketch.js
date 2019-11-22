var ox, oy, nx, ny, spd, spd0, spd00, spd00, spd000, spd0000,weight;

function pen() {
    var minWeight = 2;
    var maxWeight = 30;
    var weightIncrement = 4;
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

    stroke(0);
    strokeWeight(weight)
    line(ox, oy, nx, ny);
    ox = nx;
    oy = ny;

    spd0000 = spd000;
    spd000 = spd00;
    spd00 = spd0;
    sped0 = spd;

}

function between2(num, a, b) {
    return (num >= a && num <= b);
}



function setup() {
    createCanvas(300, 500);
    background(255);
}

function draw() {
    document.body.addEventListener("touchstart", () => {
        ox = mouseX;
        oy = mouseY;
        document.body.addEventListener("touchmove", pen)
    })
    document.body.addEventListener("touchend", () => {
        document.body.removeEventListener("touchmove", pen)
    })


}