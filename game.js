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
var score = 0;
var xpos = 0;
var movement = true;
var jumpImage;
var sexyJabba;
var hairy;
var laser;
var laserImage;
var scream;

function preload() {
    playerImage = loadImage("http://i.imgur.com/gMG8oAS.png")
    enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png")
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png")
    hunterImage = loadImage("./Images/tiefighter.png")
    flameballImage = loadImage("./Images/flameBall.png")
    jumpImage = loadImage("./Images/jump.png")
    sexyJabba = loadImage("./Images/sexyjabba.png")
    hairy = loadImage("./Images/hairy.png")
    laserImage = loadImage("./Images/laser2.png")
    soundFormats('mp3', 'ogg');
    scream = loadSound("./sounds/Female_Scream_Horror-NeoPhyTe-138499973.1.mp3")
}

function setup() {
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
    flame.position.x = 1200
    flame.position.y = 1000
    
    laser = createSprite(width/2, 0, 0, 0);
    laser.addImage(laserImage);
    
}

function draw() {
    background(backgroundImage);
    
    hunter.position.x = hunter.position.x + speed 
    
    
    if (hunter.position.x > width || hunter.position.x < 0) {
        speed = speed*-1
    }
    
    if (movement === true) {
        if (keyDown(RIGHT_ARROW) && player.position.x < width) {
            player.position.x = player.position.x + 10
        }
    
        if (keyDown(LEFT_ARROW) && player.position.x > 0) {
            player.position.x = player.position.x - 10
        }
        if (keyDown(UP_ARROW) && player.position.x > 0) {
            player.position.y = player.position.x - 10
        }
        if (keyDown(DOWN_ARROW) && player.position.x > 0) {
            player.position.y = player.position.x + 10
        }
        flame.position.x = 1200
        flame.position.y = 1000
    }
    
    if (score === 5) {
        background(jumpImage)
        scream.setVolume(10)
        scream.play()
        
    } 
    else if (score === 10) {
        background(sexyJabba)
    }
    else if (score === 15) {
        background(hairy)
    }
    else {
        background(backgroundImage)
    }
    
    enemy.position.y = enemy.position.y + random(1, 20);
    
    if (enemy.position.y > height && movement === true) {
        enemy.position.y = 0;
        enemy.position.x = random(5, width-5);
        score = score + 1
    }
    
    if (enemy.overlap(player) || laser.overlap(player)) {
        gameOver();
    }
    
    if (isGameOver) {
        gameOver();
    } else {
        if (enemy.overlap(player) || laser.overlap(player)){
            isGameOver = true;
        }
    }
    
    laser.position.x = hunter.position.x
    laser.position.y = laser.position.y + 10
    
    if (laser.position.y > height && movement === true) {
        laser.position.y = 0;
        laser.position.x = random(5, width-5);
        score = score + 1
    }
    
    //if (hunter.position.x === 300 || hunter.position.x === 600) {
    //    fireLaser()
    //}
    
    drawSprites();
    status();
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
        movement = true;
        isGameOver = false;
        player.position.x = width/2;
        player.position.y = height-100;
        enemy.position.x = width/2;
        enemy.position.y = 0;
        score = score - score
    }
}

function status() {
    fill("white")
    text(score, 20, 30)
}

//function fireLaser() {
    //laser.position.x = 
    //laser.position.y = laser.position.y + 5
//}