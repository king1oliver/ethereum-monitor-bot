# Ethereum Monitor Bot

This bot monitors the Ethereum blockchain for specific events and sends notifications to a Telegram channel.

## Features

- Monitor new token launches
- Monitor new liquidity additions
- Easily extendable for additional monitoring criteria
- Configurable via environment variables

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory and fill in the required variables (see `.env.example`)
4. Start the bot: `npm start`

## Configuration

Edit the `.env` file to configure the bot:

- `RPC_URL`: Ethereum RPC URL (e.g., Infura endpoint)
- `TELEGRAM_BOT_TOKEN`: Your Telegram bot token
- `TELEGRAM_CHANNEL_ID`: ID of the Telegram channel to send notifications
- `TELEGRAM_WEBHOOK_URL`: Webhook URL for your Telegram bot
- `MONITOR_NEW_TOKENS`: Set to 'true' to monitor new token launches
- `MONITOR_NEW_LIQUIDITY`: Set to 'true' to monitor new liquidity additions
- `UNISWAP_V2_ROUTER_ADDRESS`: Address of the Uniswap V2 Router contract

## Extending Functionality

To add new monitoring criteria:

1. Add a new configuration option in `config.js` and `.env`
2. Create a new method in `ethMonitor.js` for the new criteria
3. Call the new method in the `startMonitoring` function if the corresponding config is enabled

## License

MIT