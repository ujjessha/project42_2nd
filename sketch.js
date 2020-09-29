var hour1;
var minute1;
var second1;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  hour1=new Hours();
  minute1=new Minutes();
  second1=new Seconds();
  

}

function draw() {
  background(0); 
  translate(200,200);
  rotate(-90);
  hr=hour();
  mn=minute();
  sc=second();

  hrAngle=map(hr%12,0,12,0,360);
  hour1.display(hrAngle);
 
  mnAngle=map(mn,0,60,0,360);
  minute1.display(mnAngle);
  
  scAngle=map(sc,0,60,0,360);
  second1.display(scAngle);
   stroke(255,0,255);
   point(0,0)
   strokeWeight(10)
   noFill();
   stroke(255,0,0);
   arc(0,0,300,300,0,scAngle);
   stroke(255,0,0);
   arc(0,0,280,280,0,hrAngle);
   stroke(255,0,0);
   arc(0,0,260,260,0,mnAngle);

 
}