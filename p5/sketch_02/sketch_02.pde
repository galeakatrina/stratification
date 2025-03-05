import processing.pdf.*;

boolean savePDF = false;

Node [] myNodes;
int maxe=40;
float space = 10;
int cols;
int rows;
int x = int(random(2,cols-1));
int y = int(random(5,rows-3));
int z = int(random(1,5)) ;

void setup() {
  size(1000, 1000);

  //create empty array list
  myNodes = new Node[maxe]; 
  cols =int(width/space);
  rows = int(height/space);


    for(int l=0; l<maxe;l++){
        stroke(0);
        fill(0);
        rectMode(CENTER);
        myNodes[l]= new Node(int(random(2,cols-1)),int(random(5,rows-3)),int(random(1,5)));    
  }

    }
  
void draw() {
   if(savePDF == true) {
    beginRecord(PDF, "lines" + frameCount + ".pdf");
  }
  background(255);
  
    for (float i=1; i<cols ; i++){
    for(float j=1 ; j<rows ; j++){
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
        for(int i = 0;i<maxe/4;i++){
          myNodes[i].display();
        }
        }
      
    if (mouseY>height/2){
        for(int i = 0;i<maxe/2;i++){
          myNodes[i].display();
        }
      }
      
        
    if (mouseY>3*height/4){
        for(int i = 0;i<maxe;i++){
          myNodes[i].display();
        }
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
