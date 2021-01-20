function setup() {
  createCanvas(800,400);
  object=createSprite(400, 200, 50, 50);
  object2=createSprite(100,100,50,50)
  object3=createSprite(500,100,20,100)
  object4=createSprite(120,100,70,320)
  object4.velocityX=2
}

function draw() {
  background("black");  
  object2.x=mouseX
  object2.y=mouseY
  if(touching(object,object2)){
    object.shapeColor="red"
    object2.shapeColor="red"
  }else{
    object.shapeColor="cyan"  
    object2.shapeColor="cyan"
  }
  
if(touching(object3,object4)){
  object3.visible=false
  object4.visible=false
}else{
  object3.visible=true
  object4.visible=true
}
  
  drawSprites();
}
