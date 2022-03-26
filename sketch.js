var ball ;

function setup() {
  ball=createSprite (200,268,30,30) ;
  createCanvas(400,400);
}

function draw()
{ 
  background("lightgreen");
  if (keyDown("A")){
    ball.position.x=ball.position.x-5
  }
  if (keyDown("D")){
    ball.position.x=ball.position.x+5
  }
  if (keyDown("W")){
    ball.position.y=ball.position.y-5
  }
  if (keyDown("S")){
    ball.position.y=ball.position.y+5
  }
drawSprites()
}




