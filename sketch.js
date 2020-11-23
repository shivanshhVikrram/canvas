var ball;
var drawing = [];
var db_drawing = [],clear
function setup(){
    createCanvas(500,500);
   //database = firebase.database ()
   clear = createButton("Clear All")
}

function draw(){
    background("black");
   for(var i = 0;i<db_drawing.length;i++){
    stroke('purple'); // Change the color
    strokeWeight(10); // Make the points 10 pixels in size
    point(db_drawing[i].x,db_drawing[i].y);
   }
   clear.mousePressed(()=>{
       db_drawing=[];alert("pleaseRefreshTheScreen")
   })
    drawSprites();
}

function mouseDragged(){
    var point = { x : mouseX, y : mouseY }
    db_drawing.push(point)
}