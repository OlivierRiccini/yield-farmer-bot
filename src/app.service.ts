import { Injectable } from '@nestjs/common';
import { ArbitrageService } from './services/arbitrage/arbitrage.service';
import { FlashLoanService } from './services/flash-loan/flash-loan.service';
import { TraderService } from './services/trader/trader.service';

@Injectable()
export class AppService {

  constructor(
    private arbitrageService: ArbitrageService,
    private flashLoanService: FlashLoanService,
    private traderService: TraderService
  ) {
    this.bootTradingBot();
  }

  getHello(): string {
    return 'Hello World!';
  }

  private bootTradingBot(): void {
    const interval = setInterval(async () => {
      try {
        console.log('************************************************');
        console.log('****************  NEW PROCESS ******************');
        console.log('************************************************');
        // ARBITRAGE
        console.log('Arbitrage...');
        const arbitrage = await this.arbitrageService.compareTokens();
        console.log('Arbitrage result: ', JSON.stringify(arbitrage));
        console.log('----------------------------------');
        // FLASH LOAN
        console.log('Flash loan...');
        await this.flashLoanService.loan(100);
        console.log('Flash loan successfully done!');
        console.log('----------------------------------');
        // TRANSACTION
          // Buy
        console.log('Buying token...');
        await this.traderService.buy(null, null, null);
        console.log('Tokens successfully bought!');
        console.log('----------------------------------');
          // Sell
        console.log('Selling token...');
        await this.traderService.sell(null, null, null);
        console.log('Tokens successfully sold!');
        console.log('----------------------------------');
        // REPAY LOAN
        console.log('Selling token...');
        await this.flashLoanService.repay(null);
        console.log('Flash loan successfully repaid!');
        console.log('----------------------------------');
        // CASH OUT
        console.log('Cashing out profit...');
        await this.traderService.cashOut(null);
        console.log('Successfully cashing out profit!');
        console.log('----------------------------------');

      } catch (err) {
        clearInterval(interval);
      }
    }, 2000);
  }
}
