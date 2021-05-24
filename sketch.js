
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var polygon1,sling1;
var stand3,stand4,stand5;
var bg ,bgimg;
var score=0;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
	world = engine.world;
  ground=new Ground(600,575);
  stand1=new Stand(570,450,300,20);
  stand2=new Stand(980,290,300,20);
  stand3=new Stand(1200,300,20,1200);
  stand4=new Stand(-10,300,20,1200);
  stand5=new Stand(600,-10,1200,20)
  box1=new Box(540,420);
  box2=new Box(580,420);
  box3=new Box(620,420);
  box4=new Box(500,420);
  box5=new Box(520,350);
  box6=new Box(560,350);
  box7=new Box(600,350);
  box8=new Box(540,300);
  box9=new Box(580,300);
  box10=new Box(560,280);
  b1=new Box(940,280);
  b2=new Box(980,280);
  b3=new Box(1020,280);
  b4=new Box(1060,280);
  b5=new Box(960,250);
  b6=new Box(1000,250);
  b7=new Box(1040,250);
  b8=new Box(980,200);
  b9=new Box(1020,200);
  b10=new Box(1000,150);
  polygon1=new Polygon(100,400,60);
  sling1=new Sling(polygon1.body,{x:125,y:370})
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  if(bgimg){
  background(bgimg);
  }
  ground.display();
  stand1.display();
  stand2.display();
  stand4.display();
  box1.display();
  box2.display();
  box3.display();
  stand5.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  b1.display();
  b4.display();
  b3.display();
  b2.display();
  b6.display();
  b5.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  polygon1.display();
  stand3.display();
  sling1.display();
  getBackgroundImage();
  drawSprites();
  textSize(20)
  fill("black")
  text("Drag The Hexagon and then release it, to launch towards the blocks",400,80);
  
  text("Press space for another chance",400,110);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling1.fly();
}
function keyPressed(){
 if (keyCode===32 && polygon1.body.speed<3){
  sling1.attach(polygon1.body);
 }
}
async function getBackgroundImage(){
var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responsejson=await response.json();
var datetime=responsejson.datetime;
var hour=datetime.slice(11,13);
if(hour>18 && hour<=06){
bg="light.jpg";
}
else{
bg="dark.jpg";
}
bgimg=loadImage(bg);
}