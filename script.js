let sizex = 0;
let sizey = 0;
let col = 0; //color
let playBool=false;
let t=0,c=0;
let a1,a2,a3,a4;
let x,y,scalex,scaley,b;
function setup() {
  createCanvas(windowWidth, windowHeight);
  col = int(random(200,255));
  bg = random(-0.2,1);
  a1=(random(-3.5,-1));
  a2=(random(1,3.2));
  a3=(random(-4,-0.5));
  a4=(random(-4.2,-3));
  if (bg>=0){
    b=0;
    background(b);
    stroke(255)
  }else{
    b=255;
    background(b);
    stroke(0);
  }
  x=random(-5,5);
  y=random(-5,5);

}

function draw() {
  if (bg>=0){
    background(0,0,0,8);
    stroke(255,255,255,50);
  }else{
    background(255,255,255,8);
    stroke(0,col/10,col/7,100);
  }
  scale(0.9,0.9)
  if(playBool){t+=0.0000001;}
  translate(width*0.05,height*0.05);
  for (var i = 0; i < 20000; i++) {
    var oldx = x;
    var oldy = y;
    x = sin(a1 * oldx-oldy) - sin(a2 * oldx+a3)*cos(a4 * oldy-a3);
    y = sin(a3 * oldy-a1) - cos(a4 * oldx)*sin(oldy*a1);
    scalex = map(x, -2, 2, 0, width);
    scaley = map(y, -2, 2, 0, height);
    point(scalex, scaley);
  }
  if(playBool){
    a1-=PI/100*sin(t)*cos(t/2)-0.01*cos(t/3);
    a2-=PI/200*sin(t/2)*sin(t*3);
    a3+=PI/150*cos(t*PI);
    a4+=PI/300*cos(t);
  }

}
function mousePressed(){
  playBool=!playBool;
}

function keyPressed(){
	bg = random(-0.2,1);
  a1=(random(-3.5,-1));
  a2=(random(1,3.2));
  a3=(random(-4,-0.5));
  a4=(random(-4.2,-3));
  if (bg>=0){
    b=0;
    background(b);
    stroke(255)
  }else{
    b=255;
    background(b);
    stroke(0);
  }
  x=random(-5,5);
  y=random(-5,5);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(b);
}