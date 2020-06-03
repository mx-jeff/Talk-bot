import time
import eel

@eel.expose
def mensagemFormatada(para_quem):
    tempoAtual = time.strftime("%H:%M:%S, %d %b %Y", time.localtime())
    msg = f'Hello, {para_quem}! {tempoAtual}'
    eel.saida(msg)