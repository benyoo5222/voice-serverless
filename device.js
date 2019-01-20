const constraints = {
  audio: true,
  video: false
};

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

window.onload = function () {
  var recognition = new webkitSpeechRecognition();
  recognition.onresult = function(event) {
    console.log(event)
  }
  recognition.start();
}a
