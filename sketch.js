var count = 0;
var change = true;
var a = 0;
var pic;
function preload(){
  pic = loadImage("hand2.png");
}

function setup() {
  createCanvas(1000, 1000);
  background(0,0,0);

  
}

function draw() {
  angleMode(DEGREES)
  
  translate(200,200);
  image(pic, 0,0,200,200);
  rotate(-50);
  
  
  
  translate(200,200);

  imageMode(CENTER);
  //rectMode(CENTER);

  rotate(85);
  if(count > 100){
    
    a += 1;
    rotate(a);
  }else{
    a += -1;
    rotate(a);
  }
  
  

  
  background(220);
  image(pic, 0,0,200,200);
  //rect(0,0,200,200)

  
  count = count + 1;
  print(count);
  
  if(count % 205 == 0){
    count = 0;
  }
  
  
  
}

