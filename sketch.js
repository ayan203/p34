var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  var bg
function preload(){
  bg=loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //snow=new Snow(20,20)
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);
   Engine.update(engine);
 // snow.display();

  
  drawSprites();
}