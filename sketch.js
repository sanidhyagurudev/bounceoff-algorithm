var object1, movingRect;

function setup() {
  createCanvas(1200,800);
  object1 = createSprite(400, 100, 50, 80);
 object1.shapeColor = "green";
  object1.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  object1.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceoff(object1,movingRect);

  
  drawSprites();
}
function bounceoff(object1,object2) {
  if (object2.x - object1.x < object1.width/2 +object2.width/2
    && object1.x - object2.x <object1.width/2 + object2.width/2) {
  object2.velocityX = object2.velocityX * (-1);
  object1.velocityX = object1.velocityX * (-1);
}
if (object2.y - object1.y < object1.height/2 +object2.height/2
  && object1.y - object2.y < object1.height/2 + object2.height/2){
  object2.velocityY =object2.velocityY * (-1);
  object1.velocityY = object1.velocityY * (-1);
}

}
