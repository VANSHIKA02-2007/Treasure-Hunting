var bg,bg2,form,system,code,security,clapping,attempted;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2 = loadImage("treasure.jpg");
  
  clapping = loadSound("clapping sound.mp3");
  attempted = loadSound("attempted sound.wav");
  
}

function setup() {
  createCanvas(1400,700);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 570, 50);

// add code for changing the background to the treasure background
  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",450, 350);
    attempted.play();
    
  }

  drawSprites();
}