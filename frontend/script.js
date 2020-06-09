import speak from './utils.js'

const text = document.querySelector('#text')
const nome = document.querySelector('input')
const btn = document.querySelector('#enviar')
const limpar = document.querySelector('#limpar')


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
