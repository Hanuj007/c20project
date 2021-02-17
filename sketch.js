var a,b;


function setup(){
createCanvas(1200,800);
a=createSprite(300,200,50,50);
b=createSprite(100,300,20,20);

a.shapeColor="green";
b.shapeColor="green";


}


function draw(){
  background("lightblue");
console.log(a.y-b.y);
  
a.x=World.mouseX;
a.y=World.mouseY;  
  
if(a.x-b.x< a.width/2+b.width/2 && b.x-a.x<  a.width/2+b.width/2 && a.y-b.y<  a.width/2+b.width/2 && b.y-a.y<  a.width/2+b.width/2){
  a.shapeColor="red";
  b.shapeColor="red";
}
else{
a.shapeColor="green";
b.shapeColor="green";
}
  drawSprites();

}