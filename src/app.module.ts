import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArbitrageService } from './services/arbitrage/arbitrage.service';
import { FlashLoanService } from './services/flash-loan/flash-loan.service';
import { TraderService } from './services/trader/trader.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ArbitrageService, FlashLoanService, TraderService],
})
export class AppModule {}
