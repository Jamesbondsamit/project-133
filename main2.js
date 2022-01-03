img="";

status="";

function preload(){
    img=loadImage('computer.jpg');
}

function setup(){
    canvas=createCanvas(640,450);
    canvas.center();
   objectDetector=ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML="Status: detecting object";
}
function modelLoaded(){
    console.log("Model loaded");
    status=true;
    objectDetector.detect(img,gotresult);
}

function gotresult(error,results){
    if(error){
        console.log(error)
    }else{
        console.log(results);
    }
}
function draw(){
image(img,0,0,640,450);
fill("#00a8ad");
text("computer, mouse , keyboard",65,75);
stroke("#00a8ad");
noFill();
rect(30,60,450,350);

}
