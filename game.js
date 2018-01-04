var player;
var enemy;

function setup() {
    createCanvas(250, 250);
    player = createSprite(width/2, height-25, 50, 50);
    enemy = createSprite(width/2, 0, 10, 30)
}

function draw() {
    background(0, 0, 100);
    if (keyDown(RIGHT_ARROW) && player.position.x < width) {
        player.position.x = player.position.x + 3
    }
    
    if (keyDown(LEFT_ARROW) && player.position.x > 0) {
        player.position.x = player.position.x - 3
    }
    
    enemy.position.y = enemy.position.y + 5;
    
    if (enemy.position.y > height) {
        enemy.position.y = 0;
        enemy.position.x = random()
    }
    
    drawSprites();
    
}
