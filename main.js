Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach( '#camera' );

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='imgRes' src='"+data_uri+"'>";
    });
}

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hpXFZGl9e/model.json",modelLoaded);

function modelLoaded() {
    console.log("Model: LOADED!");
}

function check() {
    imgResult = document.getElementById('imgRes');

    classifier.classify(imgResult, gotRes);
}

function gotRes(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("pred1").innerHTML= results[0].label;
        document.getElementById("pred2").innerHTML= results[1].label;
        document.getElementById("pred3").innerHTML= results[2].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        prediction_3 = results[2].label;
        if(results[0].label == "palm") {
            document.getElementById("pred1").innerHTML = "&#9995;"+"This means to stop!";
        }
        if(results[0].label == "rock") {
            document.getElementById("pred1").innerHTML = "&#129304;"+"This means to rock 'n roll!";
        }
        if(results[0].label == "thumbs-up") {
            document.getElementById("pred1").innerHTML = "&#128077;"+"This means good job!";
        }
        if(results[0].label == "thumbs-down") {
            document.getElementById("pred1").innerHTML = "&#128078;"+"This means bad job!";
        }
        if(results[0].label == "a-ok") {
            document.getElementById("pred1").innerHTML = "&#128076;"+"This means OK!";
        }
//first array above, second below.
        if(results[2].label == "palm") {
            document.getElementById("pred2").innerHTML = "&#9995;"+"This means to stop!";
        }
        if(results[2].label == "rock") {
            document.getElementById("pred2").innerHTML = "&#129304;"+"This means to rock 'n roll!";
        }
        if(results[2].label == "thumbs-up") {
            document.getElementById("pred2").innerHTML = "&#128077;"+"This means good job!";
        }
        if(results[2].label == "thumbs-down") {
            document.getElementById("pred2").innerHTML = "&#128078;"+"This means bad job!";
        }
        if(results[2].label == "a-ok") {
            document.getElementById("pred2").innerHTML = "&#128076;"+"This means OK!";
        }
//second array above, third below.
        if(results[3].label == "palm") {
            document.getElementById("pred3").innerHTML = "&#9995;"+"This means to stop!";
        }
        if(results[3].label == "rock") {
            document.getElementById("pred3").innerHTML = "&#129304;"+"This means to rock 'n roll!";
        }
        if(results[3].label == "thumbs-up") {
            document.getElementById("pred3").innerHTML = "&#128077;"+"This means good job!";
        }
        if(results[3].label == "thumbs-down") {
            document.getElementById("pred3").innerHTML = "&#128078;"+"This means bad job!";
        }
        if(results[3].label == "a-ok") {
            document.getElementById("pred3").innerHTML = "&#128076;"+"This means OK!";
        }

        }
    }
