function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('')
}

function modelReady(){
    classifier.classify(gotResults);
}