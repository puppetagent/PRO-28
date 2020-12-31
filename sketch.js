
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

function preload()
{
  boyImg = loadImage("sprites/boy.png");
  treeImg = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1600, 800);

  engine = Engine.create();
  world = engine.world;
  
  boy = createSprite(800,635,100,200);
  boy.addImage(boyImg);
  boy.scale=0.18;

  tree = createSprite(1200,450,100,200);
  tree.addImage(treeImg);
  tree.scale=0.5;

  ground = new Ground(800,750,1600,10);

  stone = new Stone(600,660,100,100);

  sling = new Slingshot(stone.body,{x:690,y:550});

  mango1 = new Mango(1200,300,40,40);
  mango2 = new Mango(1000,350,40,40);
  mango3 = new Mango(1300,300,40,40);
  mango4 = new Mango(1100,300,40,40);
  mango5 = new Mango(1400,350,40,40);

  keyPressed ();

  Engine.run(engine);
  
}


function draw() {
  
	Engine.update(engine);
	
 rectMode(CENTER);
  background(255,255,255);
  
  drawSprites();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);

  ground.display();
  stone.display();
  sling.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
}



  function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

  function mouseReleased(){
    sling.fly();
}

  function detectollision (lstone,lmango) {
      mangoBodyPosition = lmango.body.position;
      stoneBodyPosition = lstone.body.position;

    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

        if(distance<-lmango.r+lstone.r){
          Matter.Body.setStatic(lmango.body,false);
        }
}

  function keyPressed () {
    if(keyCode === 32) {
      Matter.Body.setPosition(stone.body,{x:690,y:550});
    }
  }