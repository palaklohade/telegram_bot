const { configDotenv } = require('dotenv');
console.log("hellooooo")
const Telegrambot = require('node-telegram-bot-api');

require("dotenv").config();

console.log(process.env.TELEGRAM_API_KEY);

const bot = new Telegrambot(process.env.TELEGRAM_API_KEY, {
    polling: true
});

if (bot.isPolling){
    console.log('bot is polling');
}

bot.on('message', function(msg){
 console.log('Received a message');

 const res = `Hi ${msg.from.first_name}! I received your message: ${msg.text}`;

 bot.sendMessage(msg.chat.id, res);
})











   



