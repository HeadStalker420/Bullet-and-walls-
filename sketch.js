//create vars
var car ,wall , thickness
var speed , weight

function setup() {
  createCanvas(800,400);
//giving speed value
speed=random(223,321)
weight=random(30,52)
thickness=random(22,83)
//creating var for car
car = createSprite (50,200,50,50);
car.velocityX= speed;

car.shapeColor=color(225)
//creating var for wall
wall=createSprite(500,200,thickness,height/2)
wall.shapeColor=color(180)
}

function draw() {
  background(0);
  
  //giving the condition
  if(wall.x-car.x <(car.width+wall.width)/2){
car.velocityX=0;
var deformation=weight*speed*speed*0.5/(thickness*thickness*thickness)
// showing color red
if(deformation>180)
{
  car.shapeColor=color(255,0,0)
}
// showing color yellow
if(deformation<180 && deformation >100)
{
  car.shapeColor=color(230,230,10)
}
// showing color green
if(deformation<100)
{
  car.shapeColor=color(0,255,0)
}
 }  
  drawSprites();
}