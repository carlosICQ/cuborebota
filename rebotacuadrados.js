var squariad,edges;
var pin1, pin2, pin3, pin4, pin5, pin6;

function setup(){
createCanvas(400,400)
  squariad=createSprite(180, 50, 20, 20);  
  squariad.shapeColor = color(255);

  squariad.velocity.y = 10;
  squariad.velocity.x =4;

}

   
function draw() {
  background(220)
  //Crear bordes
  edges=createEdgeSprites();
  squariad.bounceOff(edges);
  pin1.bounceOff();
  pin2.bounceOff();
  pin3.bounceOff();
  pin4.bounceOff();
  pin5.bounceOff();
  pin6.bounceOff();
  pin1=createSprite(200,300,20,20);
  pin2=createSprite(180,320,20,20);
  pin3=createSprite(220,320,20,20);
  pin4=createSprite(160,340,20,20);
  pin5=createSprite(200,300,20,20);
  pin6=createSprite(240,320,20,20);
  
  
  drawSprites();
}