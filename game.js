var player;
var playerImage;
var hunter;
var hunterImage;
var enemy;
var enemyImage;
var backgroundImage;
var isGameOver;
var flame;
var flameballImage;
var speed = 5;
var direction;
var xpos = 0;
var movement = true;

function preload() {
    playerImage = loadImage("http://i.imgur.com/gMG8oAS.png")
    enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png")
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png")
    hunterImage = loadImage("./Images/tiefighter.png")
    flameballImage = loadImage("./Images/flameBall.png")
}

function setup() {
    movement = true;
    isGameOver = false;
    createCanvas(900, 600);
    player = createSprite(width/2, height-100, 0, 0);
    player.addImage(playerImage)
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage)
    enemy.rotationSpeed = random();
    hunter = createSprite(width/2, 25, 0, 0);
    hunter.addImage(hunterImage)
    flame = createSprite();
    flame.addImage(flameballImage);
    flame.position.x = flame.position.x + width*2
    flame.position.y = flame.position.y + height*2
}

function draw() {
    background(backgroundImage);
    
    hunter.position.x = hunter.position.x + speed 
    
    if (hunter.position.x > width || hunter.position.x < 0) {
        speed = speed*-1
    }
    movement = true;
    if (movement === true) {
        if (keyDown(RIGHT_ARROW) && player.position.x < width) {
            player.position.x = player.position.x + 3
        }
    
        if (keyDown(LEFT_ARROW) && player.position.x > 0) {
            player.position.x = player.position.x - 5
        }
    }
    
    enemy.position.y = enemy.position.y + 5;
    
    if (enemy.position.y > height) {
        enemy.position.y = 0;
        enemy.position.x = random(5, width-5);
    }
    
    if (enemy.overlap(player)) {
        gameOver();
    }
    
    if (isGameOver) {
        gameOver();
    } else {
        if (enemy.overlap(player)){
            isGameOver = true;
        }
    }
    
    drawSprites();
}

function gameOver() {
    background(0);
    flame.position.x = player.position.x
    flame.position.y = player.position.y
    movement = false;
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width/2, height/2);
    text("Click anywhere to try again.", width/2, 3*height/4);
}



function mouseClicked() {
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width/2;
        player.position.y = height-100;
        enemy.position.x = width/2;
        enemy.position.y = 0;
        flame.positon.y = flame.position.y + height*2;
        flame.position.x = flame.postition.x + width*2;
        movement = true;
    }
}
