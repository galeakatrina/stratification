let space = 10;
let cols;
let rows;

function setup () {
  createCanvas(390,390);
  cols =int( width/space);
  rows = int( height/space);
  frameRate(1);
}

function draw() {
    background(255);
 for (let i=1; i<cols ; i++){
    for(let j=1 ; j<rows ; j++){
      stroke(240);
      strokeWeight(0.1);
      line(i*space,space,i*space,height-space);
      line(space,j*space,width-space,j*space);
    }
  }

   for(let k=0; k<random(1,53); k++){
        stroke(0);
        fill(0);
        rectMode(CENTER);
        rect(space+(int(random(2,cols-1))*space),space+(int(random(1,rows-3))*space), space*int(random(1,5))*2, 5);

  }
    rectMode(CORNER);
    fill(255);
    noStroke();
    rect(0,0,space,height);
    rect(0,0,space,width);
    rect(width-space,0,space,height);
    stroke(240);
    strokeWeight(0.1);
    line((cols-1)*space,space,(cols-1)*space,height-space);

}

function windowResized(){
  resizeCanvas(400,400);
}
