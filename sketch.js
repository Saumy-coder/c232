const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1, box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    World.add(world,box1)
    World.add(world,box2)
    
    ground = new Ground(200,395,400,10)

}

function draw(){
    background("black");
    Engine.update(engine);
    rectMode(CENTER);
    box1.display();
    box2.display();
    ground.display();
}