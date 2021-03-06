const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    box3 = new Box(700,270,70,70);
    box4 = new Box(900,270,70,70);
    box5 = new Box(800,240,70,70)


    pig1=new pig(800,300)
    pig2=new pig(800,270)


    log1=new loggy(800,270,300,PI/2)
    log2=new loggy(800,240,300,PI/2)
    log3=new loggy(840,120,150,-PI/7)
    log4=new loggy(740,120,150,PI/7)
    
    ground = new Ground(600,390,1300,30)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    box3.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    log1.display();
}
