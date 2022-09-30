
function preload(){
  playerImg=loadImage("player.png")
}

function setup() {  
  createCanvas(800, 600);

  player=createSprite(400,50)
  player.addImage(playerImg)
  player.scale=0.2
  
}
function draw() {
  background("black")
  drawSprites()
}