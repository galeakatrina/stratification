import processing.pdf.*;

boolean savePDF = false;


class Node { 
  float x;
  float y;
  float z;
  // The Constructor is defined with arguments.
  Node(float tempx, float tempy,  float tempz) { 
    x = tempx;
    y = tempy;
    z = tempz;
  }

  void display() {
    fill(0);
    noStroke();
    rectMode(CENTER);
   
    rect(x,y,z,5);
    
  }


}

Node[] myNode = new Node[13];

int space = 10;
int cols;
int rows = 14;
float rspace;
PImage img;
   
     
 
    
void setup() {
  size(1000, 1000); 
  img = loadImage("img1.png");
  image(img, 0, 0);

  cols =int(width/space);
  
  rspace = int((height-2*space)/rows) ;
   
 }
  
void draw() {
   if(savePDF == true) {
    beginRecord(PDF, "lines" + frameCount + ".pdf");
  }
    //background(255);
    
     stroke(200);
     strokeWeight(0.1);
     for (float i=1; i<cols ; i++){
        line(i*space,space,i*space,height-space);
       }
      for(float j=1 ; j<rows ; j++){
      line(space,j*rspace,width-space,j*rspace);    
    }  
         int w1 = 3*(cols*space)/20;
    int w2 = 2*(cols*space)/20;
    int w3 = 8*space;
    int w4 = 3*space; 
    rspace = map(mouseY,0,height,0,(height-2*space)/rows);
   
   
  myNode[0] = new Node(space+(w1/2),(rspace*8),w1); 
  myNode[1] = new Node(space+w1+(w4/2),rspace,w4);
  myNode[2] = new Node(space+w1+w4+(w3/2),(rspace*4),w3); 
  myNode[3] = new Node(space+w1+w4+w3+(w1/2),(rspace*13),w1);
  myNode[4] = new Node(space+w1+w4+w3+w1+(w4/2),(rspace*2),w4); 
  myNode[5] = new Node(space+w1+w4+w3+w1+w4+(w4/2),(rspace*6),w4);
  myNode[6] = new Node(space+w1+w4+w3+w1+w4+w4+(w3/2),(rspace*11),w3); 
  myNode[7] = new Node(space+w1+w4+w3+w1+w4+w4+w3+(w2/2),(rspace*3),w2);
  myNode[8] = new Node(space+w1+w4+w3+w1+w4+w4+w3+w2+(w4/2),(rspace*12),w4); 
  myNode[9]= new Node(space+w1+w4+w3+w1+w4+w4+w3+w2+w4+(w1/2),(rspace*10),w1);
  myNode[10]= new Node(space+w1+w4+w3+w1+w4+w4+w3+w2+w4+w1+(w4/2),(rspace*7),w4); 
  myNode[11]= new Node(space+w1+w4+w3+w1+w4+w4+w3+w2+w4+w1+w4+(w2/2),(rspace*9),w2);
  myNode[12]= new Node(space+w1+w4+w3+w1+w4+w4+w3+w2+w4+w1+w4+w2+(w4/2),(rspace*5),w4); 
   
 for(int k=0 ; k<10 ;k ++){

   stroke(200);
   strokeWeight(1);
   int a = int(random(13));
   int b = int(random(13));
   line(myNode[a].x,myNode[a].y, myNode[b].x,myNode[b].y);
 }
 
         
 for(int i = 0 ; i<13 ; i++){
   myNode[i].display();
   
 }


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
