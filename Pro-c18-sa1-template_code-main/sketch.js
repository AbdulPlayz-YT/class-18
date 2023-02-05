var s1
function setup() {
  createCanvas(400,400);
s1 = new Student("Max",7,12);
}

function draw() 
{
  background(30);
  s1.display();
}