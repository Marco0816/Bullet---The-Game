var canvas;
var player1, player2;
var gun1, gun2;
var floatfloor;

function preload() {
  //car1_img = loadImage("../assets/car1.png");
  gun1
}

function setup() {
  canvas = createCanvas(1500, 700);
  player1 = createSprite(200,200,20,65);
  player1.shapeColor = "black"
  player2 = createSprite(900,200,20,65);
  player2.shapeColor = "black"

  
}

function draw() {
  background("white");
  drawSprites();
}
