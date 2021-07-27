var box
function setup() {
  createCanvas(400,400);
  box=createSprite(300,300,100,100)
}

function draw() 
{
  background("red");
if(keyDown("right")){
  box.x=box.x+3
}
if(keyDown("left")){
  box.x=box.x-3
}
if(keyDown("up")){
  box.y=box.y-3
}
if(keyDown("down")){
  box.y=box.y+3
}
  
drawSprites()
}




