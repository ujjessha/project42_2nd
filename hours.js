class Hours{
    constructor(x,y){
       // hr=hour();
    }
   
    display(hrAngle){
       
        push();
        rotate(hrAngle);
        stroke(0,0,255);
        strokeWeight(10);
        line(0,0,50,0);
        pop();

    }
}