prediction_1=""
prediction_2=""

Webcam.set({
    width:315,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'"/>' ;
    });


}
console.log('ml5 version:',ml5.version);mage

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IkkESzRPr/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
    var synth=window.SpeechSynthesis;
    speak_data_1= "the first prediction is"+prediction_1;
    speak_data_2="thw second prediction is"+prediction_2;
    var UtterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speech(UtterThis);
    
}