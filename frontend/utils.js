function speak(message){
    const msg = new SpeechSynthesisUtterance(message)
    const voices = window.speechSynthesis.getVoices()
    msg.voice = voices[0]
    window.speechSynthesis.speak(msg)
}

export default speak