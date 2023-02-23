let j;
function setup() {
  // put setup code here
  createCanvas(900,400);
  j=0;
}


function draw() {
  background(220);
  
  fill('yellow')
  rect(20,20,360,360)
  
  fill('black')
  rect(80,80,50,50)
  rect(240,80,50,50)
  
  fill('white')
  rect(70,250,240,50)

//gambar bergerak
  var r=1+4*Math.cos(PI*j/20)
  j+=1

  w=450
  fill(255+7*r,255*r,0)
  rect(20+w,20+2*r,360,360)
  
  fill('black')
  rect(80+w,80,50,50)
  rect(240+w,80,50,50)
  
  fill('white')
  rect(70+w,250,240,50)
}