function setup() {
    canvas = createCanvas(300, 300)
    video = createCapture(VIDEO)
    video.hide()

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wJ_r_2tn_/model.json", modelLoaded)
}

function modelLoaded() {
    console.log("Model Loaded :) !!!!!!")
}

function draw() {
    image(video , 0, 0, 300, 300)
    classifier.classify(video, gotResult)
}

function gotResult(error , results) {
    if(error) {
        console.error(error)
    }else{
        console.log(results)
        document.getElementById("name").innerHTML = results[0].label
        percent = results[0].confidence * 100
        document.getElementById("Accuracy").innerHTML = percent.toFixed(1) + " %"
    }
}