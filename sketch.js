
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	basket1= new Bin (700,630,100,100)
	ground=Bodies.rectangle (width/2,700,width,23,{isStatic:true})
  World.add(world,ground);
	paper = new Paper()

}


function draw() {
  background(256);
  
  drawSprites();
  fill('red')
  basket1.display()
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,width,23)
  paper.display()

}

function keyPressed(){
if(keyCode==UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-35})
}

}



