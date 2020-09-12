import { Injectable } from '@nestjs/common';

@Injectable()
export class FlashLoanService {
    public loan(amount: number): Promise<void> {
        return;
    }

    public repay(amount: number): Promise<void> {
        return;
    }

}
