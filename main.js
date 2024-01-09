objectDetector = "";
img="";
objects=[];
status="";

function preload(){
 img= LoadImage("https://i.pinimg.com/originals/69/06/88/690688ce6ea3d477ad74fc83f54e75eb.jpg")
}

function draw(){
canvas = createCanvas(710, 460);
canvas.center();
objectDetector=ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "El modelo logro cargar";
}



function modelLoaded(){
    console.log("modelo cargado");
    status=true;
    objectDetector.detect(img, gotResults);
}


function setup(){
  
}
