import eel
from time import sleep
from utils.utils import mensagemFormatada
from models.Chatterbot import Bot
import random


@eel.expose
def chat(pergunta): 
    # print('-'*40,'BOT CHAT','-'*40)
    bot = Bot('One')
    #bot.train()

    frase = pergunta # random.choice(bot.conversation)
    # print(f"Pc: {frase}")
    resposta = bot.call(frase)
    # print(f"Bot: {resposta}")
    eel.saida(f"Bot: {resposta}")
    

eel.init('frontend')
eel.start('index.html')
