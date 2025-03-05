// Even though there are multiple objects, we still only need one class. 
// No matter how many cookies we make, only one cookie cutter is needed.


class Node { 
  int x ;
  int y ;
  int z ;


  // The Constructor is defined with arguments.
  Node(int tempx, int tempy,  int tempz) { 

    x = tempx;
    y = tempy;
    z = tempz ;

  }

  void display() {
    rectMode(CENTER);
    noStroke();
    fill(0);
    rect(space+(x)*space,space+(y)*space, space*z*2, 5);
   
    
  }


}
