import eel
from time import sleep
from utils.utils import mensagemFormatada
from models.Chatterbot import Bot
import random


@eel.expose
def chat(pergunta): 
    print('-'*40,'BOT CHAT','-'*40)
    bot = Bot('One')
    bot.train()

    try:
        frase = pergunta # random.choice(bot.conversation)
        print(f"Pc: {frase}")
        resposta = bot.call(frase)
        print(f"Bot: {resposta}")
        eel.saida(f"{resposta}")
    
    except:
        raise
        eel.saida(f"Bot: não entendi... ")
    

eel.init('frontend')
eel.start('index.html')
chat("ola")