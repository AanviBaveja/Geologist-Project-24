const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    iron = new Iron(300,300,100,100)
    hammer = new Hammer(10,100);
    rubber = new Rubber(400,300,55)
    box= new Box(410,300,100,50)
    small= new Small(520,300,20)
    small1= new Small(530,300,20)
    small2= new Small(540,300,20)
    small3= new Small(550,300,20)
    small4= new Small(560,300,20)
    small5= new Small(570,300,20)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();
    rubber.display();
    box.display()
  small.display()
  small1.display()
  small2.display()
  small3.display()
  small4.display()
  small5.display()
    
 
}