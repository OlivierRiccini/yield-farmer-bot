import { Test, TestingModule } from '@nestjs/testing';
import { FlashLoanService } from './flash-loan.service';

describe('FlashLoanService', () => {
  let service: FlashLoanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlashLoanService],
    }).compile();

    service = module.get<FlashLoanService>(FlashLoanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
