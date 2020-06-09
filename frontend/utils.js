function speak(message){
    const msg = new SpeechSynthesisUtterance(message)
    const voices = window.speechSynthesis.getVoices()
    msg.voice = voices[0]
    window.speechSynthesis.speak(msg)
}

function listen(){
    const startButton = document.querySelector('#start')
    const output = document.querySelector('#output')

    function start(callback){
        const recognition = new webkitSpeechRecognition()
        recognition.interimResults = true
        recognition.lang = "pt-BR"
        recognition.continuous = true
        recognition.start()

        recognition.onresult = event => {
            for(let i = event.resultIndex; i < event.results.length; i++){
                if (event.results[i].isFinal) {
                    callback(event.results[i][0].transcript.trim());
                }
            }
        }
    }

    startButton.addEventListener('click', () => start(content => {
        output.textContent = content;
    }))
}

export { 
    speak, 
    listen 
}