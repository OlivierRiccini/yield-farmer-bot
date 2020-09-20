import { Injectable } from '@nestjs/common';
import Web3 from 'web3';

@Injectable()
export class AppService {

  constructor() {}

  getHello(): string {
    return 'Hello World!';
  }
}
