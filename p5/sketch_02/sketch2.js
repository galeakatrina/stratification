
class Module {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

  }

  draw() {
    rectMode(CENTER);
    noStroke();
    fill(0);
    rect(10+(this.x*10),10+(this.y*10), 10*this.z*2, 5);
  }
}


let maxe=40;
let space = 10;
let cols;
let rows;
let mods = [];

function setup() {
  createCanvas(400,400);
    cols =int(width/space);
    rows = int(height/space);

    for(let l=0; l<maxe;l++){
          stroke(0);
          fill(0);
          rectMode(CENTER);
          mods[l]= new Module(
          int(random(2,cols-1)),
          int(random(5,rows-3)),
          int(random(1,5)));
    }
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

  fill(0);
  rectMode(CENTER);
  rect(width/2, height - space, space*2*2,5);
  rect(3*width/4,space+(2*space), width/3, 5);
  rect(width/4, space+(2*space), width/3, 5);


  if (mouseY>height/6){
          for(let i = 0;i<maxe/4;i++){
            mods[i].draw();
          }
          }

    if (mouseY>height/4){
          for(let i = 0;i<maxe/2;i++){
            mods[i].draw();
          }
        }


    if (mouseY>height/2){
          for(let i = 0;i<maxe;i++){
            mods[i].draw();
          }
        }
}


function windowResized(){
  resizeCanvas(400,400);
}
