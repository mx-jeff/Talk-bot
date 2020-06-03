const text = document.querySelector('#text')
const nome = document.querySelector('input')
const btn = document.querySelector('#enviar')
const limpar = document.querySelector('#limpar')

eel.expose(saida)
text.innerHTML = ""
function saida(texto){
    text.innerHTML += `${texto} <br>`
}

btn.addEventListener('click',() => {
    eel.chat(nome.value)
})

limpar.addEventListener('click', () => {
    text.innerHTML = ""
})
