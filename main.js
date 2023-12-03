//https://teachablemachine.withgoogle.com/models/emw9lpQIY/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/emw9lpQIY/model.json',modelready);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(){
    
}