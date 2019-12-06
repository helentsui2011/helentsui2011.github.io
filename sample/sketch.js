let img;

function setup() {
  createCanvas(720, 400);
  img = loadImage("ams0.jpg");
}

function draw() {
  image(img, 0, 0);
}