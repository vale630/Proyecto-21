var ball;
var ground,groundObj, leftSide,rightSide;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 1200);

	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}


ball = Matter.Bodies.circle(200,100,20,ball_options);
World.add(world,ball);

groundObj =new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120); 

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("blue");

ellipse(ball.position.x,ball.position.y,20);
  

	
   groundObj.display(); 
   leftSide.display();
   rightSide.display();

  drawSprites();

}

function keyPressed(){
   if(keyCode === UP_ARROW) {

	Matter.Body.applyForce(ball,ball.position,{x: 85, y: -85});

	}
}

