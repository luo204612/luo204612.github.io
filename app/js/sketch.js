var ox, oy, nx, ny
var off = true
function pen() {
    nx = mouseX;
    ny = mouseY;
    stroke(0);
    strokeWeight(10)
    if ((nx - ox) * (nx - ox) + (ny - oy) * (ny - oy) > 1000)
        line(nx, ny, nx, ny);
    else
        line(ox, oy, nx, ny)
    ox = nx;
    oy = ny;
}

function setup() {
    createCanvas(256,512);
    background(255);
}

function draw() {
    document.body.addEventListener("mousedown", () => {
        document.body.addEventListener("mousemove", pen)
    })
    document.body.addEventListener("mouseup", () => {
        document.body.removeEventListener("mousemove", pen)
    })
}

