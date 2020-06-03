from chatterbot import ChatBot 
from chatterbot.trainers import ListTrainer
from time import sleep


class Bot:
    conversation = [
        "Oi",
        "Olá",
        "Tudo bem?",
        "Estou bem",
        "Bom ouvir isso",
        "Obrigado",
        "De nada",
        "Quem é você?",
        "Aquele que pode te substituir em breve..."
    ]

    def __init__(self, name="zero"):
        self.bot = ChatBot(name)
    
    def train(self):
        while True:
            self.trainer = ListTrainer(self.bot)
            self.trainer.train(self.conversation)
            sleep(5)

    def call(self, question):
        self.response = self.bot.get_response(question)
        return self.response