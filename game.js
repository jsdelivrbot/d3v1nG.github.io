var player;
var playerImage;
//var hunter;
//var hunterImage;
var enemy;
var enemyImage;
var backgroundImage;
var isGameOver;

function preload() {
    playerImage = loadImage("http://i.imgur.com/gMG8oAS.png")
    enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png")
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png")
    //hunterImage = loadImage("http://www.iconarchive.com/download/i61916/jonathan-rey/star-wars-vehicles/Slave-I.ico")
}

function setup() {
    isGameOver = false;
    createCanvas(900, 600);
    player = createSprite(width/2, height-100, 0, 0);
    player.addImage(playerImage)
    enemy = createSprite(width/2, 0, 0, 0)
    enemy.addImage(enemyImage)
    enemy.rotationSpeed = 4.0;
    //hunter = createSprite(width/2, hieght-25, 0, 0);
    //hunter.addImage(hunterImage)
}

function draw() {
    background(backgroundImage);
    if (keyDown(RIGHT_ARROW) && player.position.x < width) {
        player.position.x = player.position.x + 3
    }
    
    if (keyDown(LEFT_ARROW) && player.position.x > 0) {
        player.position.x = player.position.x - 3
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
    
    //hunter.position.y = 0;
    //hunter.position.x = 0;
    
    drawSprites();
}

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width/2, height/2);
    text("Click anywhere to try again.", width/2, 3*height/4);
}

function mouseClicked() {
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width/4;
        player.position.y = height-100;
        enemy.position.x = width/2;
        enemy.position.y = 0;
    }
}