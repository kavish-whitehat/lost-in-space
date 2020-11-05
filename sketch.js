const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var ground;
var enemy1,enemy2, enemy3, enemy4, enemy5;
var nameInput, start, retry, home, name;
function setup() {
  createCanvas(400,800);
  engine=Engine.create;
  world=Engine.world;
  enemy1 = createSprite(100, 100,25, 52);
 enemy2 = createSprite(200, 150,25, 52);
 enemy3 = createSprite(300, 200,25, 25);
 enemy4 = createSprite(400, 250,25, 25);
 enemy5 = createSprite(500, 300,25, 25);

 player=createSprite(350,75,50,50);

 nameInput = createInput("NAME");
 nameInput.position(460, 420);
 start = createButton("START");
 start.position(460, 500);
 retry = createButton("RETRY");
 retry.position(450, 900);
}

function draw() {
  background(0,0,0); 
  if (enemy1.x > 1000){
    enemy1.x = 0;
    enemy1.velocityX = random(-15, 15);
    }
    if (enemy1.y > 1000){
    enemy1.y = 0;
    }
    if (enemy2.x > 1000){
    enemy2.x = 0;
    enemy2.velocityX = random(-15, 15);
    }
    if (enemy2.y > 1000){
    enemy2.y = 0;
    }
    if (enemy3.x > 1000){
    enemy3.x = 0;
    enemy3.velocityX = random(-15, 15);
    }
    if (enemy3.y > 1000){
    enemy3.y = 0;
    }
    if (enemy4.x > 1000){
    enemy4.x = 0;
    enemy4.velocityX = random(-15, 15);
    }
    if (enemy4.y > 1000){
    enemy4.y = 0;
    }
    drawSprites();

  }