const ethers = require('ethers');
const config = require('./config');
const telegramBot = require('./telegramBot');

class EthMonitor {
  constructor() {
    this.provider = new ethers.providers.JsonRpcProvider(config.RPC_URL);
  }

  async startMonitoring() {
    this.provider.on('block', async (blockNumber) => {
      const block = await this.provider.getBlock(blockNumber, true);
      
      if (config.MONITOR_NEW_TOKENS) {
        await this.checkNewTokens(block);
      }
      
      if (config.MONITOR_NEW_LIQUIDITY) {
        await this.checkNewLiquidity(block);
      }
    });
  }

  async checkNewTokens(block) {
    for (const tx of block.transactions) {
      if (tx.to === null && tx.data.startsWith('0x60806040')) {
        const message = `New token potentially launched in tx: ${tx.hash}`;
        telegramBot.sendMessage(message);
      }
    }
  }

  async checkNewLiquidity(block) {
    const uniswapV2RouterAddress = config.UNISWAP_V2_ROUTER_ADDRESS;
    for (const tx of block.transactions) {
      if (tx.to === uniswapV2RouterAddress && tx.data.startsWith('0xf305d719')) {
        const message = `New liquidity potentially added in tx: ${tx.hash}`;
        telegramBot.sendMessage(message);
      }
    }
  }
}

module.exports = new EthMonitor();