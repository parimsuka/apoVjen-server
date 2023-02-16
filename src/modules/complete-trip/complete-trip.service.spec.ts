import { Test, TestingModule } from '@nestjs/testing';
import { CompleteTripService } from './complete-trip.service';

describe('CompleteTripService', () => {
  let service: CompleteTripService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompleteTripService],
    }).compile();

    service = module.get<CompleteTripService>(CompleteTripService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
