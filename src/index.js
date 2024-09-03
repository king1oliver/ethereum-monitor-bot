require('dotenv').config();
const ethMonitor = require('./ethMonitor');
const telegramBot = require('./telegramBot');
const config = require('./config');

async function main() {
  await telegramBot.setup();
  ethMonitor.startMonitoring();
}

main().catch(console.error);