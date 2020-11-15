
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Contrint




function preload(){

	
boyimage=loadImage("images/boy.png")
treeimage=loadImage("images/tree.png")	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(width/2,height-10,width,10)
	mango1= new Mango(730,200)
	mango2= new Mango(730,250)
	mango3= new Mango(730,300)
	mango4= new Mango(800,300)
	mango5= new Mango(800,200)
	mango6= new Mango(900,200)
	mango7= new Mango(900,300)
	mango8= new Mango(900,250)
	mango9= new Mango(800,250)
	mango10= new Mango(650,250)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
ground1.display();
image(boyimage,120,440,80,200)
image(treeimage,600,100,400,500)
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();

}



