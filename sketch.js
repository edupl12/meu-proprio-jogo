var lnave, lasteroide;
var nave, asteroideoeda;
var fundimage
var background

function preload() {
  lnave = loadImage("nave1.png");
  lasteroide = loadImage("ast.png");
  fundimage = loadImage("fund.jpg")
}

function setup() {
  background=createCanvas(800, 400);
  background.position.y += 5
  
  nave = createSprite(400, 157, 50, 50);
  nave.addImage(lnave);
  nave.scale = 0.3  ;

  asteroide = createSprite(600, 250, 50, 50);
  asteroide.addImage(lasteroide);
  asteroide.scale = 0.4;


}

function draw() {
  background(fundimage);
  
  
  if (keyIsDown(RIGHT_ARROW)) {
    nave.position.x += 5;
  }

  if (keyIsDown(LEFT_ARROW)){
    nave.position.x -= 5;
  }

  drawSprites();


}
