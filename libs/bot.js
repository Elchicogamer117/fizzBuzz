const telegramBot = require("node-telegram-bot-api");
const explorerController = require("./controllers/explorerController");

const token = "";

const bot = new telegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {

      const chatId = msg.chat.id;
      const resp = match[1]; 

      bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
      const chatId = msg.chat.id;
      const patch = msg.text;
      responseBot = explorerController.getValidationBot(patch)
      bot.sendMessage(chatId, responseBot);
});