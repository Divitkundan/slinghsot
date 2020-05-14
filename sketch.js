const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,shelf1,shelf2;
var box = [];
var ball;

function setup(){
    createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(250,height,500,30);
    shelf1 = new Ground(75,150,150,15);
    shelf2 = new Ground(425,100,150,15);
    //on shelf 1
    box1 = new Box(75,120,30,30);
    box2 = new Box(105,120,30,30);
    box3 = new Box(45,120,30,30);
    box4 = new Box(90,105,30,30);
    box5 = new Box(60,105,30,30);
    box6 = new Box(75,90,30,30);
    //on shelf 2
    box7 = new Box(425,70,30,30);
    box8 = new Box(455,70,30,30);
    box9 = new Box(395,70,30,30);
    box10 = new Box(440,55,30,30);
    box11 = new Box(410,55,30,30);
    box12 = new Box(425,40,30,30);
    //On ground layer 1
    box13 = new Box(365,470,30,30);
    box14 = new Box(425,470,30,30);
    box15 = new Box(455,470,30,30);
    box16 = new Box(395,470,30,30);
    box17 = new Box(335,470,30,30);
    box18 = new Box(305,470,30,30);
    //layer2
    box19 = new Box(440,455,30,30);
    box20 = new Box(410,455,30,30);
    box21 = new Box(380,455,30,30);
    box22 = new Box(350,455,30,30);
    box23 = new Box(320,455,30,30);
    //layer3
    box24 = new Box(425,440,30,30);
    box25 = new Box(395,440,30,30);
    box26 = new Box(365,440,30,30);
    box27 = new Box(335,440,30,30);
    //layer4
    box28 = new Box(410,400,30,30);
    box29 = new Box(380,400,30,30);
    box30 = new Box(350,400,30,30);
    //layer5
    box31 = new Box(395,370,30,30);
    box32 = new Box(365,370,30,30);
    //layer6
    box33 = new Box(380,340,30,30);
    //makig the ball to be thrown
    ball = new Ball(200,200,30,30);
    //Sling for a projectile that can be thrown around when pulled on
    slingShot = new SlingShot( ball.body,{x:250 ,y:250 });
    
}

function draw(){
    background("black");
    Engine.update(engine);

    text("Drag the Ball and Release to throw it on the Boxes",50,200);
    text("Press SPACE to attach the ball bach on the Sling ",50,230);

    ground.display();
    shelf1.display();
    shelf2.display();
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
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    
    ball.display();
    slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
function keyPressed() {
    if(keyCode === 32) {
        slingShot.attach(ball.body);
    }
}