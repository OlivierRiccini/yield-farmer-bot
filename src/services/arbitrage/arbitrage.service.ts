import { Injectable } from '@nestjs/common';

@Injectable()
export class ArbitrageService {
    public async compareTokens(): Promise<any> {
        return { 
            token: 'TestToken',
            toBuyOn: {
                exchangeName: 'Exchange A',
                price: 24
            },
            toSellOn: {
                exchangeName: 'Exchange A',
                price: 29
            }
        }
    }
}
