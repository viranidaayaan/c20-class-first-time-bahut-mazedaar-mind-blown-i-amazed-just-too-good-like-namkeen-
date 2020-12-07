var chintu , chintu2;


function setup() {
  createCanvas(800,400);
  chintu = createSprite(400, 200, 50, 50);
  chintu.shapeColor="lightpink"
  chintu2 = createSprite(400, 200, 50, 50);
  chintu2.shapeColor="lightpink"
}

function draw() {
  chintu2.y=mouseY
  chintu2.x=mouseX
  if(chintu2.x-chintu.x<=chintu.width/2+chintu2.width/2
  && chintu.x-chintu2.x<=chintu2.width/2+chintu.width/2
  && chintu2.y-chintu.y<=chintu2.height/2+chintu.height/2
  && chintu.y-chintu2.y<=chintu.height/2+chintu2.height/2)

    {
    chintu2.shapeColor="red"
    chintu.shapeColor="red"
  }
  else{
    chintu.shapeColor="lightpink"
    chintu2.shapeColor="lightpink" 
  }

  background(0);  
  drawSprites();
}