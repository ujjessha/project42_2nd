class Minutes{
    constructor(x,y){
       // mn=minute();
    }
   
    display(mnAngle){
       
        push();
        rotate(mnAngle);
        stroke(0,255,0);
        strokeWeight(10);
        line(0,0,100,0);
        pop();

    }
}