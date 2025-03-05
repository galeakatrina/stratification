class Node {

  // The Constructor is defined with arguments.
  constructor(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  draw() {
    fill(0);
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.z,5);

  }
}

let myNode = [];
let space = 10;
let cols;
let rows = 14;
let rspace;
// PImage img;


function setup() {
  createCanvas(700,770);
  // img = loadImage("img1.png");
  // image(img, 0, 0);

  cols =int(width/space);
  rspace = int((height-2*space)/rows) ;
  // background(200);

 }

function draw() {

  //
  // cols = map(mouseY,0,width,5,width/space);
     stroke(250);
     strokeWeight(0.1);
     for (let i=1; i<cols ; i++){
        line(i*space,space,i*space,height-space);
       }
      for(let j=1 ; j<rows ; j++){
      line(space,j*rspace,width-space,j*rspace);
    }
    let w1 = 3*(cols*space)/20;
    let w2 = 2*(cols*space)/20;
    let w3 = 8*space;
    let w4 = 3*space;
    rspace = map(mouseY,0,height,0,(height-2*space)/rows);


    stroke(0);
    fill(0);
    rectMode(CENTER);

  myNode[0] = new Node(space+(w1/2),(rspace*8),w1);
  myNode[1] = new Node(space+w1+(w4/2),rspace,w4);
  myNode[2] = new Node(space+w1+w4+(w3/2),(rspace*4),w3);
  myNode[3] = new Node(space+w1+w4+w3+(w1/2),(rspace*13),w1);
  myNode[4] = new Node(space+w1+w4+w3+w1+(w4/2),(rspace*2),w4);
  myNode[5] = new Node(space+w1+w4+w3+w1+w4+(w4/2),(rspace*6),w4);
  myNode[6] = new Node(space+w1+w4+w3+w1+w4+w4+(w3/2),(rspace*11),w3);
  myNode[7] = new Node(space+w1+w4+w3+w1+w4+w4+w3+(w2/2),(rspace*3),w2);
  myNode[8] = new Node(space+w1+w4+w3+w1+w4+w4+w3+w2+(w4/2),(rspace*12),w4);
  myNode[9] = new Node(space+w1+w4+w3+w1+w4+w4+w3+w2+w4+(w1/2),(rspace*10),w1);
  myNode[10]= new Node(space+w1+w4+w3+w1+w4+w4+w3+w2+w4+w1+(w4/2),(rspace*7),w4);
  myNode[11]= new Node(space+w1+w4+w3+w1+w4+w4+w3+w2+w4+w1+w4+(w2/2),(rspace*9),w2);
  myNode[12]= new Node(space+w1+w4+w3+w1+w4+w4+w3+w2+w4+w1+w4+w2+(w4/2),(rspace*5),w4);

 for(let k=0 ; k<10 ;k ++){
   stroke(250);
   strokeWeight(1);
   let a = int(random(13));
   let b = int(random(13));
   line(myNode[a].x,myNode[a].y, myNode[b].x,myNode[b].y);
 }


 for(let r = 0 ; r<13 ; r++){
   myNode[r].draw();
 }

}


function windowResized(){
  resizeCanvas(700, 770);
  // background(200);
}
