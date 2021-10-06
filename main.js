//https://teachablemachine.withgoogle.com/models/8B_Zcp32k/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/8B_Zcp32k/model.json",modelReady)
}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
    console.log("gotResult")
}