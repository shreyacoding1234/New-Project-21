var roadImage;
var carImage;
var boxImage, coinImage, coneImage, logImage;

var gameState = 1;
var PLAY = 1, box;

var score;




function preload() {
  roadImage = loadImage("Road.png");
  carImage = loadImage("CarImage.png");
  boxImage = loadImage("BoxImage.png");
  coinImage = loadImage("coinImage.png");
  coneImage = loadImage("trafficconeImage.png");
  logImage = loadImage("logImage.png");

}

function setup() {
  //create the canvas and adjust the window sizes to suit the device 
  createCanvas(windowWidth, windowHeight);
  
  //putting an background in
  background(0);

  //creating road
  road = createSprite(width / 2, 200);
  road.addImage(roadImage);
  road.velocityY = 7;
  road.scale = 4;

  //creating car
  car = createSprite(windowWidth / 2, windowHeight - 100);
  car.addImage(carImage);
  car.scale = 0.1;

  invisibleGround = createSprite(500, 1, 150, 5000);
  invisibleGround.visible = false; 

  invisibleGround2 = createSprite(1430, 1, 150, 5000);
  invisibleGround2.visible = false;

  score = 0;
}

function draw() {
  background(0);

  textSize(20);
  fill("black");
  text("Score: " ,1179,52);

  
  box = Math.round(random(1, 2)) //added this

  //codes for gamestate = PLAY
  if (gameState === PLAY) {

    score = score + Math.round(getFrameRate()/60)

    //putting an background in
    

    //stroke("red");
    

    //code to reset the road
    if (road.y > height) {
      road.y = height / 2;
    }

    //code for moving car to the right when right arrow is pressed 
    //if (keyDown("right")) {
   //   car.x = 1179
   //   car.y = 786
   // }

    car.x = World.mouseX

    car.collide(invisibleGround);
    car.collide(invisibleGround2);

    //code for moving car to the left when left arrow is pressed 
    //if (keyDown("left")) {
   //   car.x = 751
   //   car.y = 786
    //}

    //creating box, coin, log
    if (frameCount % 50 == 0) {
      console.log(box)
      if (box == 1) {
        createBox();
      } else if (box == 2) {
        createCoin();
      } else {
        createlog();
      }
    }

    //creating the sprites 
    drawSprites();
  }

}

function createBox() {
  console.log("executed")
  box = createSprite(715, 1, 10, 10);
  box.x = Math.round(random(1179,751));
  box.addImage(boxImage);
  box.scale = 0.1
  box.velocityY = 3;
  log.lifetime = 500;
}

function createCoin() {
  coin = createSprite(715, 1, 10, 10);
  coin.x = Math.round(random(1179,751));
  coin.addImage(coinImage);
  coin.scale = 0.1
  coin.velocityY = 3;
  coin.lifetime = 500;
}

function createlog() {
  log = createSprite(715, 1, 10, 10);
  log.x = Math.round(random(1179,751));
  log.addImage(logImage);
  log.scale = 0.3
  log.velocityY = 3;
  log.lifetime = 500;
}
