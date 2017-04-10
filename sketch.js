var newWidth = 100;
var  newHeight = 10;
var demayasGreen, demayasYellow, demayasBlue;

//setup function only executes once
function setup(){
    createCanvas(600,400);
    background(50);
    demayasGreen = random(1,200);
    demayasYellow = random(1,200);
    demayasBlue = random(1,200);
}

//draw function loops forever
function draw(){
   frameRate(30000);
   if(mouseIsPressed){
      noStroke();
       fill(demayasGreen,demayasYellow,demayasBlue,100);
       rect(mouseX,mouseY,newWidth,newHeight);
   }
   
}

