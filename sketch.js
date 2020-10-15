var bananaImage,obstacleImage,obstacleGroup,foodGroup,backgroundImage,
    score,player_running,ground;

function preload(){
  backgroundImage=loadImage("jungle.jpg");
  player_running=loadAnimation("Monkey_01.png",
 "Monkey_02.png","Monkey_03.png","Monkey_04.png",
  "Monkey_05.png","Monkey_06.png","Monkey_07.png",
  "Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}
function setup() {
  createCanvas(800, 400);

  background1=createSprite(0,0,800,400);
 background1.addImage(backgroundImage);
   background1.scale=1.5;
 background1.x=background1.width/2;
   background1.velocityX=-4;
   monkey=createSprite(100,280,30,30);
  monkey.addAnimation("running",player_running);
  monkey.scale=0.2;
  ground=createSprite(400,380,800,5);
 score=0;
  
  ground.visible=false;
  obstaclesGroup = new Group();
  foodGroup= new Group();

  
}

function draw() {
  background(220);
  
  if(background1.x<100){
    background1.x=background1.width/2;
  }
  if(obstaclesGroup.isTouching(monkey)){
    monkey.scale=0.15;
  }
  if(foodGroup.isTouching(monkey)){
   score=score+2;
    foodGroup.destroyEach();
    
  }
  if(keyDown("space")){
    monkey.velocityY=-5;
    
  }
  switch(score){
    case 10:monkey.scale=0.17;
      break;
      case 20:monkey.scale=0.19;
      break;
      case 30:monkey.scale=0.21;
      break;
      case 40:monkey.scale=0.23;
      break;
      default:break;
  }
  
  monkey.velocityY=monkey.velocityY+0.3;
  monkey.collide(ground);
  spawnBanana();
  spawnObstacles();
  drawSprites();
 text("score"+score,750,50);
}

function spawnObstacles(){
  if(frameCount%120===0){
  var  stone=createSprite(800,360,30,30);
  stone.addImage(obstacleImage);
    stone.velocityX=-5;
    stone.scale=0.5;
    stone.lifetime=900;
    obstaclesGroup.add(stone);
    
  }
    
}
function spawnBanana(){
  if(frameCount%180===0){
    var banana = createSprite(800,130,30,30);
  banana.addImage(bananaImage);
    banana.velocityX=-5;
    banana.scale=0.1;
    banana.lifetime=900;
    foodGroup.add(banana);
  }
}








