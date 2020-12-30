img_animal ="";
status= "";
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
fill("#ff0000");
text("dog", 100, 100);
noFill();
stroke("#ff0000");
rect(100, 150, 175, 400);

text("cat",300, 175);
noFill();
stroke("#ff0000");
rect(250 , 100 , 450 , 450);

}

function modelloaded(){
    console.log("model is loaded");
    status= true;
    objectdetector.detect(img_animal, gotresult);
}

function gotresult(error, result){}
    if(error){
        console.log(error);
    }
else{
    console.log(result);
}
