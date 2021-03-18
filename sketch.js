const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground1,ground2;
var slingShot,polygon;
var block1,block2,block3,block4,block5,block6,block7,block8,block9
function preload(){}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(400,250,230,20);
    ground3 = new Ground(750,250,230,20);
    block1 = new Block(380,240,30,40);
    block2 = new Block(410,240,30,40);
    block3 = new Block(440,240,30,40);
    block4 = new Block(470,240,30,40);
    block5 = new Block(500,240,30,40);
    block6 = new Block(530,240,30,40);
    block7 = new Block(560,240,30,40);
    block8 = new Block(400,200,30,40);
    block9 = new Block(430,200,30,40);
    block10 = new Block(460,200,30,40);
    polygon = new Polygon(200,200)


    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(polygon,{x:100, y:200});
}

function draw(){
    
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    ground2.display(); 
    ground3.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block8.display();
    block9.display();
    block10.display();
    polygon.display();


    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
