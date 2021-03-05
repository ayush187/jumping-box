var fix1,fix2,fix3,fix4;
var moving;
var music;
function preload(){
  music = loadSound("music.mp3")
}
function setup(){
  createCanvas(800,600)
  moving = createSprite(100,250,10,10)
  moving.shapeColor = "white"
  moving.velocityX=3
  moving.velocityY = 3

  fix1 = createSprite(100,590,180,20)
  fix1.shapeColor = "blue"

  fix2 = createSprite(300,590,180,20)
  fix2.shapeColor = "orange"

  fix3 = createSprite(500,590,180,20)
  fix3.shapeColor= "yellow"

  fix4 = createSprite(700,590,180,20)
  fix4.shapeColor = "green"
}
function draw(){
  background(rgb(10,10,10))
  if(moving.x<0){
    music.play();
    moving.velocityX=3;
  }else if(moving.x>800){
    music.play();
    moving.velocityX=-3
  }
  
  if(moving.y<0){
    music.play();
    moving.velocityX=3;
  }
  
  
  if  (isTouching(moving,fix1))  {
    music.play();
    moving.shapeColor="blue"
    bounceoff(moving,fix1)
    fix1.velocityY=0
    fix1.velocityX=0
  }
 else if  (isTouching(moving,fix2))  {
    music.stop();
    moving.shapeColor="orange"
    moving.velocityX=0
    moving.velocityY=0
    bounceOff(moving,fix2)
    fix2.velocityY=0
    fix2.velocityX=0
  }
  else if  (isTouching(moving,fix3))  {
    music.play();
    moving.shapeColor="yellow"
    bounceOff(moving,fix3)
    fix3.velocityY=0
    fix3.velocityX=0
  }
 else  if  (isTouching(moving,fix4))  {
    music.play();
    moving.shapeColor="green"
    bounceOff(moving,fix4)
    fix4.velocityY=0
    fix4.velocityX=0
  }
  drawSprites();
}



