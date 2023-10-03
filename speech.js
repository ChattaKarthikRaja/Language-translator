
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    // Web Speech API is supported
  } else {
    console.error('Web Speech API is not supported in this browser.');
  }

  
const startButton = document.getElementById('voice_to_text');
const output = document.getElementById('text_input');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();


recognition.interimResults = true; 

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  output.textContent = transcript;
};

startButton.addEventListener('click', () => {
  if (recognition.running) {
    recognition.stop();
  } else {
    recognition.start();
  }
});
