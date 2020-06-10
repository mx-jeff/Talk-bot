import { speak, listen } from './utils.js'

const text = document.querySelector('#text')
const nome = document.querySelector('input')
const btn = document.querySelector('#enviar')
const limpar = document.querySelector('#limpar')
const reconhecimentoDeVoz = document.querySelector('#voz')

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

// Enviar voz backend
listen(reconhecimentoDeVoz, text, voz => {
    text.innerHTML = `Carregando... <br>`
    eel.chat(voz)
})

// Limpar texto
limpar.addEventListener('click', () => {
    text.innerHTML = ""
})
