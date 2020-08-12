
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1 = new Box(900,348,50,50);
  box2 = new Box(850,348,50,50);
  box3 = new Box(800,348,50,50);
  box4 = new Box(750,348,50,50);
  box5 = new Box(700,348,50,50);
  box6 = new Box(650,348,50,50);
  box7 = new Box(600,348,50,50);

  box8 = new Box(870,300,50,50);
  box9 = new Box(820,300,50,50);
  box10 = new Box(770,300,50,50);
  box11 = new Box(720,300,50,50);
  box12 = new Box(670,300,50,50);
  box13 = new Box(620,300,50,50);

  box14 = new Box(850,250,50,50);
  box15 = new Box(800,250,50,50);
  box16 = new Box(750,250,50,50);
  box17 = new Box(700,250,50,50);
  box18 = new Box(650,250,50,50);

  box19 = new Box(800,200,50,50);
  box20 = new Box(750,200,50,50);
  box21 = new Box(700,200,50,50);

  box22 = new Box(750,150,50,50);


//   var polygon_options = {
//     'restitution':0.8,
//     'friction':1.0,
//     'density':1.0
// }

   polygon = new Pentagon(100,100);
  // polygon = Bodies.polygon(100,100, 5,20, polygon_options);

  // World.add(world,this.polygon);

  slingshot= new SlingShot(polygon.body, {x:100, y:80});



  ground = new Ground(500,500,1000,20);

  platform1 = new Ground(750,350,450,15);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,227,227);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  
  box8.display();
  
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();
  box21.display();

  box22.display();

  polygon.display();
  slingshot.display();


  //imageMode(CENTER);
  // fill("blue");
  //image(polygonImg, polygon.position.x, polygon.position.y, 30,30);

  ground.display();
  platform1.display();


  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body, {x:mouseX , y:mouseY});
  }
  
  
  function mouseReleased(){
	 slingshot.chain.bodyA = null;
  }


