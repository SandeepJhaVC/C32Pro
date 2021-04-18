const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;

var bg = 0;

function preload() {
    BgImg();
}

function setup() {
    var canvas = createCanvas(1920, 970);
    engine = Engine.create();
    world = engine.world;

    platform2 = new Ground(1000, 640, 400, 20);
    platform3 = new Ground(1500, 400, 400, 20);

    box1 = new Box(1400, 370, 50, 40);
    box2 = new Box(1450, 370, 50, 40);
    box3 = new Box(1500, 370, 50, 40);
    box4 = new Box(1550, 370, 50, 40);
    box5 = new Box(1600, 370, 50, 40);
    box6 = new Box(1650, 370, 50, 40);
    box7 = new Box(1350, 370, 50, 40);

    box8 = new Box(1420, 330, 40, 40);
    box9 = new Box(1460, 330, 40, 40);
    box10 = new Box(1500, 330, 40, 40);
    box11 = new Box(1540, 330, 40, 40);
    box12 = new Box(1580, 330, 40, 40);
    box13 = new Box(1620, 330, 40, 40);
    box14 = new Box(1380, 330, 40, 40);



    box15 = new Box(850, 600, 50, 40);
    box16 = new Box(900, 600, 50, 40);
    box17 = new Box(950, 600, 50, 40);
    box18 = new Box(1000, 600, 50, 40);
    box19= new Box(1150,600, 50, 40);
    box20= new Box(1100, 600, 50, 40);
    box21= new Box(1050, 600, 50, 40);

    box22= new Box(850, 560, 40, 40);
    box23= new Box(890, 560, 40, 40);
    box24 = new Box(930, 560, 40, 40);
    box25 = new Box(970, 560, 40, 40);
    box26 = new Box(1010, 560, 40, 40);
    box27 = new Box(1050, 560, 40, 40);
    box28 = new Box(1090, 560, 40, 40);
    box29 = new Box(1130, 560, 40, 40);

    ball = new Ball(300,250,60);

    sling = new SlingShot(ball.body,{x:300,y:250});

}

function draw() {

    if(bg === 1){
        background("yellow");
    }else if(bg === 2){
        background("black");
    }

    Engine.update(engine);

    textSize(50);
    fill("blue")
    text("score: " +score, width-300,100);

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();

    platform2.display();
    platform3.display();

    ball.display();

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

    


    sling.display();
    

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(ball.body);
    }
}

async function BgImg() {
    //var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/New_York");

    var responseJson = await response.json();

    var dt = responseJson.datetime;

    var hr = dt.slice(11, 13);
    

    if (hr >= 6 && hr <= 18) {
        bg = 1;
    } else {
        bg = 2;
    }
}