
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper;
var paperimage,dustbinimage;

function preload(){

	dustbinimage = loadImage("images/dustbingreen.png");
    paperimage = loadImage("images/paper.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	//create box
	box1=createSprite(600,495,10,10);
		// box2=createSprite(300,635,10,50);
		// box3=createSprite(500,635,10,50);

	//paper
	paper =createSprite(200,200,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.addImage(dustbinimage);
  paper.addImage(paperimage);
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position, {x:85,y:-85});
	   
	 }
   }
   
   


