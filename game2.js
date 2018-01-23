var player1;
var player1Image;

var player2;
var player2Image;

function preload() {
    player1Image = loadImage("./Images/rick.png")
    player2Image = loadImage("./Images/vader.png")
}

function setup() {
    createCanvas(1425, 800)
    background(100)
    
    player1 = createSprite(0, 0, 200, 200)
    player1.addImage(player1Image);
    
    player2 = createSprite()
    player2.addImage(player2Image);
}