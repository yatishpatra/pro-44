var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("lock.png")
  bg2 = loadImage("unlock.png")
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  //background was bg previously
  background("black");
  clues();
  security.display();
  textSize(50);
  fill("white");
  text("Score: " + score, 750, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",180, 220);
  }

  drawSprites()
}