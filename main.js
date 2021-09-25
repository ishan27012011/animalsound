function start_classification(){
navigator.mediaDevices.getUserMedia({audio: true, video:false})
classifier =
 ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json',modelReady);
}
function modelReady(){
classifier.classify(gotResult);
}
function gotResult(error, results) {
if (error) {
console.log("Error");
}
else{
console.log(results);
}
}