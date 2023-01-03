//elemnt
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");


// SpeEchRecognition Initialize for use

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()

// Speech Start

recognition.onstart = function() {
  console.log("Voice Enable");
}

//Speech Stop

recognition.onend = function(){
  console.log("Voice disable");
  // setTimeout(() => {
  //   recognition.start();
  // }, 2000)           // i use setTime to automaticalically enable the voice again
}
// recognition.continuous = true;

// function for start 

startBtn.addEventListener("click", () => {
  recognition.start();
})
// Stop function
stopBtn.addEventListener("click", () => {
  recognition.stop();
});


function readOut(message){
  const speech = new SpeechSynthesisUtterance();
  // const voices = window.speechSynthesis;
  // const allVoice = voices.getVoices()
  speech.text = message
  speech.volume = 1
  // speech.voice = allVoice[4]
  window.speechSynthesis.speak(speech)
  console.log('Speak Out');
}

speakBtn.addEventListener("click", () => {
  readOut("Hello World");
})

window.onload = function(){
  readOut("Welcome to day Long, it is the best choice no  problem")
}