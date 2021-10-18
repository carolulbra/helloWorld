function setup() {
    createCanvas(windowWidth, windowHeight);
    
  }
  
function draw() {
    background('#162944');

    strokeWeight(4);
    stroke(255);
  
    for(var x = 0; x <= mouseX; x += 50){
            for(var y = 0; y <= mouseY; y += 50){
            fill(random(255),random(255),random(255));
            ellipse(x,y,25,25);
        
            }
    }

    
    stroke(0);
    strokeWeight(4);
    textSize(60);
    textAlign(CENTER, CENTER);
    textFont('Lucida Console');
    fill('white');
    text('Hello World!', windowWidth/2, 100);
  }