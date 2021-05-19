var sword,swordImg;
var fruitsGroup,fruit1,fruit2,fruit3,fruit4,fruit;
var score=0;
var aliensGroup,alien1,alien2;
var gameOver,gameOverImg;
var PLAY=1;
var END=0;
var gameState=1;
var swooshSound,overSound;
var enemy,enemysGroup;
var veggie,veggiesGroup;


function preload(){
 swordImg=loadImage("sword.png");
 fruit1=loadImage("fruit1.png");
 fruit2=loadImage("fruit2.png");
 fruit3=loadImage("fruit3.png");
 fruit4=loadImage("fruit4.png");
  
 alien1=loadImage("alien1.png");
 alien2=loadImage("alien2.png");
  
 gameOverImg=loadImage("gameover.png");
  
 swooshSound=loadSound("knifeSwooshSound.mp3") 
overSound=loadSound("gameover.mp3");  
}
function setup(){
  createCanvas(400,400);
  
 sword=createSprite(200,200,50,50);
 sword.addImage(swordImg); 
 sword.scale=0.6;
  
 fruitsGroup = createGroup();
 aliensGroup = createGroup();
 enemysGroup = createGroup();
 veggiesGroup= createGroup(); 
  
 gameOver=createSprite(200,200,50,50);
 gameOver.addImage(gameOverImg); 
}
function draw(){
background("skyblue");
 text("Score: " +score,200,20);
 
if(gameState===PLAY){
  sword.x = World.mouseX;
 sword.y = World.mouseY;
 gameOver.visible=false; 
 spawnFruits();
 spawnAliens();
 spawnEnemys();
 spawnVeggies(); 
 sword.visible=true; 
  
  if(fruitsGroup.isTouching(sword)){
   score = score + 1;
   fruit.destroy(); 
   swooshSound.play(); 
 }
 if(veggiesGroup.isTouching(sword)){
   score = score+1;
   veggie.destroy();
   swooshSound.play();
 }
 if(aliensGroup.isTouching(sword)||enemysGroup.isTouching(sword)){
  alien.destroy();
  enemy.destroy(); 
  overSound.play(); 
  gameState=END; 
}
 if(score%5===0&&score>0){
   fruitsGroup.velocityX=fruitsGroup.velocityX+-1;
 } 
  
}
 

  
if(gameState===END){
 fruitsGroup.setVelocityEach(0);  
 aliensGroup.setVelocityEach(0);
 enemysGroup.setVelocityEach(0);
 veggiesGroup.setVelocityEach(0); 
 fruitsGroup.visible=false;
 aliensGroup.visible=false;
 enemysGroup.visible=false;
 veggiesGroup.visible=false; 
 gameOver.visible = true; 
 textSize(20);
 text("Press 'R' to restart",125,300);
 sword.visible=false; 
  restart(); 
}
 
  drawSprites();
}

function spawnFruits(){
  if(World.frameCount%60===0){
   fruit=createSprite(400,200,20,20);
   fruit.velocityX=-5; 
   var rand=Math.round(random(1,4));
    switch(rand) {
      case 1:fruit.addImage(fruit1);  
             break;
      case 2:fruit.addImage(fruit2);       
             break;
      case 3:fruit.addImage(fruit3);  
             break;
      case 4:fruit.addImage(fruit4);
             break;
      default:break;  
    }
   fruit.y=Math.round(random(40,360)); 
   fruit.scale=0.2; 
   fruit.lifetime=90;  
   fruitsGroup.add(fruit); 
  }     
}


function spawnAliens(){
  if(World.frameCount%60===0){
   alien=createSprite(400,200,20,20);
   alien.velocityX=-6; 
   var rand=Math.round(random(1,2));
    switch(rand) {
      case 1:alien.addImage(alien1);  
             break;
      case 2:alien.addImage(alien2);       
             break;
      default:break;  
    }
   alien.y=Math.round(random(40,360)); 
   alien.scale=0.8; 
   alien.lifetime=90;
    
   aliensGroup.add(alien); 
  }   
}

function spawnEnemys(){
 if(World.frameCount%60===0){ 
  enemy=createSprite(0,200,50,50);
  enemy.velocityX=6;
 var ran=Math.round(random(1,2));
 switch(ran){
   case 1:enemy.addImage(alien1);
          break;
   case 2:enemy.addImage(alien2);
          break;
   default:break;
 }
 enemy.y=Math.round(random(40,360));
 enemy.scale=0.8;
 enemy.lifetime=90;
 enemysGroup.add(enemy);  
 }  
}

function spawnVeggies(){
  if(World.frameCount%60===0){
   veggie=createSprite(0,200,20,20);
   veggie.velocityX=5; 
   var rand=Math.round(random(1,4));
    switch(rand) {
      case 1:veggie.addImage(fruit1);  
             break;
      case 2:veggie.addImage(fruit2);       
             break;
      case 3:veggie.addImage(fruit3);  
             break;
      case 4:veggie.addImage(fruit4);
             break;
      default:break;  
    }
   veggie.y=Math.round(random(40,360)); 
   veggie.scale=0.2; 
   veggie.lifetime=90;  
   veggiesGroup.add(veggie); 
  }     
}


function restart(){
 
 
 if(keyDown("r")){
  gameState=PLAY;
  score=0; 
 gameOver.visible=false; 
 } 
  }