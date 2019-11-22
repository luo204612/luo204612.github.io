var ox, oy, nx, ny
var off = true
function pen() {
    nx = mouseX;
    ny = mouseY;
    stroke(0);
    strokeWeight(10)
    console.log((nx-ox)*(nx-ox)+(ny-oy)*(ny-oy))
    if ((nx-ox)*(nx-ox)+(ny-oy)*(ny-oy)>1000)
        line(nx, ny, nx, ny);
    else
        line(ox, oy, nx, ny)
    ox = nx;
    oy = ny;
}

function setup() {
    createCanvas(350, 600);
    background(255);
}

function draw() {
    document.body.addEventListener("touchstart", () => {
        document.body.addEventListener("touchmove", pen)
    })
    document.body.addEventListener("touchend", () => {
        document.body.removeEventListener("touchmove", pen)
    })


}