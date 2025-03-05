
import processing.pdf.*;

boolean savePDF = false;


int space = 50;
int rows;

void setup () {
  size(1000, 1000);
  rows = height/space;
  frameRate(5000);
}

void draw() {
  if(savePDF == true) {
    beginRecord(PDF, "lines" + frameCount + ".pdf");
  }
  
    background(255);

    //grid
    for(float j=1 ; j<rows ; j++){
      stroke(0);
      strokeWeight(5);
      float o=random(3*space,width*3/4);
      noFill();
      beginShape();
      vertex(space,j*space);
      vertex(o,j*space);
      endShape();
      arc(o+(space/2),j*space,space,space,0,PI);
      beginShape();
      vertex(o+space,j*space);
      vertex(width-space,j*space);
      endShape();
      rectMode(CENTER);
      fill(255);
      noStroke();
      rect(random(o-50),j*space,50,10);

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

    if(savePDF == true) {
    endRecord();
  }

}


void mousePressed() {
  savePDF = true;
}

void mouseReleased() {
  savePDF = false;
}
