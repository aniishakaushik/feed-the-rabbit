var garden,rabbit;
var gardenImg,rabbitImg;
var leafImg,oleafImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg  = loadImage ("leaf.png") ;
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
 World.mouseY=-9

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createapples(){
var apple = createSprite(random(50,350),40,10,10);
appleImg.velocityX=9;












}









