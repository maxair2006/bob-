
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var bob1,roof
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof=new Roof(400,350,300,20)
	bob1= new Bobs(360,550)
	bob2= new Bobs(380,560)
	bob3= new Bobs(400,560)
	bob4= new Bobs(420,560)
	bob5= new Bobs(440,550)

	rope1=new Rope(bob1.body,roof.body,-100,0)
	rope2=new Rope(bob2.body,roof.body,-50,0)
	rope3=new Rope(bob3.body,roof.body,-0,0)
	rope4=new Rope(bob4.body,roof.body,+50,0)
	rope5=new Rope(bob5.body,roof.body,+100,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  drawSprites();
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
	}
}



