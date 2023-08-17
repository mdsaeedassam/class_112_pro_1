https://teachablemachine.withgoogle.com/models/[...]
Wedcam.set({
    width:350,
    height:300,
    image_fermat:'png',
    pug_qulity:90
});

camera = document.getElementById("camera");
Wedcam.attach('#camera');


function take_suapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}
console.log('ml5 verion',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]',modelLoaded);