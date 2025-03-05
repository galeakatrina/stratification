let space = 50;
let rows;

function setup () {
  createCanvas(400,400);
  rows = height/space;
  frameRate(5);
}

function draw() {
    background(255);

    //grid
    for(let j=1 ; j<rows ; j++){
      stroke(0);
      strokeWeight(5);
      let k=random(3*space,width*3/4);
      noFill();
      beginShape();
      vertex(0,j*space);
      vertex(k,j*space);
      endShape();
      arc(k+(space/2),j*space,space,space,0,PI);
      beginShape();
      vertex(k+space,j*space);
      vertex(width,j*space);
      endShape();
      rectMode(CENTER);
      fill(255);
      noStroke();
      rect(random(k-50),j*space,50,10);

    }

    // for (int i=1; i<random(20);i++){
    //    fill(0);
    //    ellipse(random(space,width-space), ((int(random(rows))*space)+(space/2)), space/4,space/4);

    //}

    rectMode(CORNER);
    fill(255);
    noStroke();
    rect(0,0,space,height);
    rect(0,0,space,width);
    rect(width-space,0,space,height);
    stroke(240);
    strokeWeight(0.1);
    //line((cols-1)*space,space,(cols-1)*space,height-space);


}


function windowResized(){
  resizeCanvas(400,400);
}
