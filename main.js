Webcam.set({
    width: 305,
    height: 235,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take(){
Webcam.snap(function(data_uri){
    document.getElementById("foto").innerHTML = '<img id="capture_img" src="' + data_uri + '"/>';
});
}
console.log("ml5 versiom: " + ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uCt1SpC5k/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model loaded");
}
function check(){
    img = document.getElementById('capture_img');
    classifier.classify(img, goResult);
}

function goResult(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("resultObject").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);

    }
}
        

