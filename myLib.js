function isTouching(object1,object2){
    if (object1.x-object2.x <object1.width/2+object2.width/2
        &&object2.x-object1.x<object2.width/2+object1.width/2
        &&object1.y-object2.y < object1.height/2+object2.height/2
        &&object2.y-object1.y< object2.height/2+object1.height/2){
            return true;
        }else{return false;}} 
function bounceOff(object1,object2){
  if(object1.x-object2.x <object1.width/2+object2.width/2
    &&object2.x-object1.x<object2.width/2+object1.width/2){
        object1.velocityX=object1.velocityX*-1
        object2.velocityX = object2.velocitX*0
    }
    if(object1.y-object2.y < object1.height/2+object2.height/2
        &&object2.y-object1.y< object2.height/2+object1.height/2){
            object1.velocityY = object1.velocityY*-1
            object2.velocityY= object2.velocityY*0
        }
        if(object1.y<0){
            music.stop();
            object1.velocityX=-3;
          }
          if(object1.x<0){
            music.stop();
            object1.velocityX=3;
          }else if(object1.x>800){
            music.stop();
            object1.velocityX=-3

          
}
}

