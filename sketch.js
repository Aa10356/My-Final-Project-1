var snake;
unitTime = 1;
speed = 15;
unitWidth = 25
var score = 0;
lastTime = 0

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);
  snakeGroup = new Group();
  snake = createSprite(200, 200, unitWidth, unitWidth);
  snakeGroup.add(snake);
  
  appleGroup = new Group();

  edges = createEdgeSprites();
}

function draw() 
{
  background(30);
  textSize(30)
  text("Score: "+score,50,50);

  if (World.seconds == (lastTime + unitTime)) {
    lastTime = World.seconds;

    var s = createSprite(200, 200, unitWidth, unitWidth);

    snakeGroup.add(s);
  }
  for (var i = snakeGroup.length-1; i > 0; i--) {
    snakeGroup.get(i).x = snakeGroup.get(i-1).x
    snakeGroup.get(i).y = snakeGroup.get(i-1).y
  }
  //unitWidth += .1;
  drawSprites();
  if (keyDown("right")) {
    snake.setSpeedAndDirection(5, 0);
  }
  if (keyDown("left")) {
    snake.setSpeedAndDirection(5, 180);
  }
  if (keyDown("up")) {
    snake.setSpeedAndDirection(5, -90);
  }
  if (keyDown("down")) {
    snake.setSpeedAndDirection(5, 90);
  }
}



function spawnApples() {
  if (frameCount % 60 === 0) {

  }
}