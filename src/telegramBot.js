const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');

class TelegramBotService {
  constructor() {
    this.bot = new TelegramBot(config.TELEGRAM_BOT_TOKEN, { polling: false });
  }

  async setup() {
    await this.bot.setWebHook(config.TELEGRAM_WEBHOOK_URL);
  }

  sendMessage(message) {
    this.bot.sendMessage(config.TELEGRAM_CHANNEL_ID, message);
  }
}

module.exports = new TelegramBotService();