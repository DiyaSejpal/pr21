var canvas;
var music;
var a,b,c,d;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,400);
      
    a = createSprite(40,390,80,15);
    a.shapeColor = "blue";
    
    b = createSprite(130,390,80,15);
    b.shapeColor = "yellow";

    c = createSprite(220,390,80,15);
    c.shapeColor = "purple";

    d = createSprite(320,390,80,15);
    d.shapeColor = "green";

    box = createSprite(random(20,750),100,40,40);
    box.shapeColor = "white";
    box.velocityY = 4;
    box.velocityX = -4;

    
    







    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
   
    edges = createEdgeSprites();
    box.bounceOff(edges);


    if(a.isTouching(box) && box.bounceOff(a)){
        box.shapeColor = "blue";
        music.play();
    }

    if(b.isTouching(box)){
        box.shapeColor = "yellow";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(c.isTouching(box) && box.bounceOff(c)){
        box.shapeColor = "purple";
        music.play();
    }

    
    if(d.isTouching(box) && box.bounceOff(d)){
        box.shapeColor = "green";
        music.stop()
    }

drawSprites();

   

}
