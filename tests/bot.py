from chatterbot import ChatBot 
from chatterbot.trainers import ListTrainer


bot = ChatBot('Xanim')

conversation = [
    "hello",
    "Hi there!",
    "How are you doing?",
    "I'm doing great",
    "That's good to hear",
    "Thank you",
    "You're welcome.",
]


trainer = ListTrainer(bot)
trainer.train(conversation)

response = bot.get_response("Good morning!")
print(response)