const text = document.querySelector('#text')
const nome = document.querySelector('input')
const btn = document.querySelector('#enviar')
const limpar = document.querySelector('#limpar')


function speak(message){
    const msg = new SpeechSynthesisUtterance(message)
    const voices = window.speechSynthesis.getVoices()
    msg.voice = voices[0]
    window.speechSynthesis.speak(msg)
}


// Mostrar na tela
eel.expose(saida)
text.innerHTML = ``
function saida(texto){
    text.innerHTML += `Bot: ${texto} <br>`
    speak(texto)
}


// Enviar ao backend
btn.addEventListener('click',() => {
    text.innerHTML = `Carregando... <br>`
    eel.chat(nome.value)
})


// Limpar texto
limpar.addEventListener('click', () => {
    text.innerHTML = ""
})
