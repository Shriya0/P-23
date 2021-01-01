const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var ground , ball

function setup(){
var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    var ball_options = {

      restitution : 0.8
  }

    ball = Bodies.rectangle(200,200,50,50,ball_options)
    World.add(world,ball)

    var ground_options = { 
        isStatic : true
  }
    
  ground=Bodies.rectangle(200,390,400,50,ground_options)
  World.add(world,ground)

}
function draw(){

    background("black");
    Engine.update(engine);

    rectMode(CENTER)
    rect(ball.position.x,ball.position.y,50,50)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50)

}