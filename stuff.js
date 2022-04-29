img="";
status="";
objects= [];
function setup(){
    canvas=createCanvas(400,380);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!")
    status=true;
    objectDetector.detect(img, gotResult);

}

function gotResult(error,results)
{
    if(error){
        console.log(error);

    }
    console.log(results);    
    objects=results;
}
function preload(){
    img=loadImage('IMG-4929.jpg');

}

function draw()
{
    image(img,0,0,400,380);
  if(status !="")
 {
for(i = 0;i <objects.length; i++ ){
    document.getElementById("status").innerHTML="Status: Object Detected";
    document.getElementById("object_no"). innerHTML = objects.length + " out of 2 objects detected";
    fill("limegreen");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke("limegreen");
    rect(objects[i].x,objects[i].y, objects[i].width,objects[i].height);
  }
 }
}


function back() {
    window.location = "index.html";
}