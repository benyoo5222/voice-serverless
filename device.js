window.onload = function () {
  //Initialize speech recognition API
  var recognition = new webkitSpeechRecognition();

  //When there is a voice input, "event" will have a transcription
  //of the speech input
  recognition.onresult = function(event) {
    console.log(event);
  };

  //start speech recognition
  recognition.start();
}a
