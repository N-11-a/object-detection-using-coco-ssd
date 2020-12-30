img_animal ="";
status= "";
object= [];
function preload(){
    img_animal  = loadImage('dog_cat.jpg');
    }


function setup(){
canvas= createCanvas(500, 600);
canvas.center();
objectdetector=ml5.objectDetector("cocossd", modelloaded);


document.getElementById("status").innerHTML="Detecting Object";
}



function draw(){
image(img_animal, 0, 0, 500, 600);
if(status!=""){
    for(i=0; i< object.length; i++){
        document.getElementById("status").innerHTML=" Object detected";
        
        fill("blue");
        percent= floor(object[i].confidence*100);
        text(object[i].label+percent+"%", object[i].x, object[i].y );
        noFill();
        stroke("blue");
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
        
    }
}

}

function modelloaded(){
    console.log("model is loaded");
    status= true;
    objectdetector.detect(img_animal, gotresult);
}

function gotresult(error, result){
    if(error){
        console.log(error);
    }
else{
    console.log(result);
    object= result;
}
}


    