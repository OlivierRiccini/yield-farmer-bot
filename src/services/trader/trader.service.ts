import { Injectable } from '@nestjs/common';

@Injectable()
export class TraderService {
    public async buy(token: any, exchange: any, amount: number): Promise<void> {
        return;
    }

    public async sell(token: any, exchange: any, amount: number): Promise<void> {
        return;
    }

    public async cashOut(amount: number): Promise<void> {
        return;
    }
}
