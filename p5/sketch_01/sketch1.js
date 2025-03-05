let space = 10;
let cols;
let rows = 6;
let rspace;

function setup() {
  createCanvas(400,400);
  cols =int( width/space);
  rspace = int((height-2*space)/rows) ;
}

function draw() {
    background(255);

     stroke(200);
     strokeWeight(0.1);
     for (let i=1; i<cols ; i++){
        line(i*space,space,i*space,height-space);
       }
      for(let j=1 ; j<rows ; j++){
      line(space,j*rspace,width-space,j*rspace);
    }


     rspace = map(mouseY,0,height,0,(height-2*space)/rows);
     //widths

     let w1 = int(width*0.2);
        let w2 = int(width*0.1);
        let w3 = int(width*0.4);
        let w4 = int(width*0.2);
        let w5 = int(width*0.1);


    ////possible configurations behind planes
    //    float a =((rspace*2)-2.5)-random(rspace);
    //    float b = ((rspace*2)-2.5)-random(rspace);
    //    stroke(255,0,0);
    //    noFill();
    //    strokeWeight(2);
    //    beginShape();
    //    vertex(space,(rspace*2)-2.5);
    //    vertex(space , a );
    //    vertex(space+(random(space+w1)), a );
    //    vertex(a,b);
    //    endShape();


          fill(200);
          noStroke();

          rectMode(CORNERS);
          rect(space+w1,rspace-2.5,random(w1),rspace+2.5);
          rect(space+w1+w2+w3+w4, (rspace*3)-2.5, (space+w1+w2+w3+w4)-random(w3+w4),(rspace*3)+2.5);
          rectMode(CORNER);
          rect(space+w1+w2,rspace -2.5 ,int(random(width)),5);

          rect(space+w1+w2+w3,rspace*4 -2.5, random(w4), 5);


          line(space+w1+w2+w3,rspace*4,space+w1+w2+w3 +random(w4),rspace*4);


    //fixed planes

        fill(0);
        rect(space,(rspace*2)-2.5,w1,5);
        rect(space+w1,rspace-2.5,w2,5);
        rect(space+w1+w2,(rspace*4)-2.5,w3,5);
        rect(space+w1+w2+w3,(rspace*5)-2.5,w4,5);
        rect(space+w1+w2+w3+w4,(rspace*3)-2.5,w5,5);


    // frame

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
