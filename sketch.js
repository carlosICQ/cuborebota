var squariad,edges;
var pin1, pin2, pin3, pin4, pin5, pin6;
function preload(){

}

function setup(){
createCanvas(400,400)
  squariad=createSprite(180, 50, 20, 20);  
  squariad.shapeColor = color(255);

  squariad.velocity.y = 10;
  squariad.velocity.x =4;
  pin1.velocity.y =0.5;
  pin1.velocity.x =0.5;
  pin2.velocity.y =0.5;
  pin2.velocity.x =0.5;
  pin3.velocity.y =0.5;
  pin3.velocity.x =0.5;
  pin5.velocity.y =0.5;
  pin5.velocity.x =0.5;
  pin4.velocity.y =0.5;
  pin4.velocity.x =0.5;
  pin6.velocity.y =0.5;
  pin6.velocity.x =0.5;
  
}

   
function draw() {
  background(220)
  //Crear bordes
  edges=createEdgeSprites();
  squariad.bounceOff(edges);
  pin1.bounceOff(edges);
  pin2.bounceOff(edges);
  pin3.bounceOff(edges);
  pin4.bounceOff(edges);
  pin5.bounceOff(edges);
  pin6.bounceOff(edges);
  pin1.bounceOff(pin2,pin3,pin4,pin5,pin6);
  pin2.bounceOff(pin1,pin3,pin4,pin5,pin6);
  pin3.bounceOff(pin2,pin1,pin4,pin5,pin6);
  pin4.bounceOff(pin2,pin3,pin1,pin5,pin6);
  pin5.bounceOff(pin2,pin3,pin4,pin1,pin6);
  pin6.bounceOff(pin2,pin3,pin4,pin1,pin5);
  pin1=createSprite(200,300,20,20);
  pin2=createSprite(180,320,20,20);
  pin3=createSprite(220,320,20,20);
  pin4=createSprite(160,340,20,20);
  pin5=createSprite(200,300,20,20);
  pin6=createSprite(240,320,20,20);
  
  
  drawSprites();
}