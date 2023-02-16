import { Test, TestingModule } from '@nestjs/testing';
import { CreateTripService } from './create-trip.service';

describe('CreateTripService', () => {
  let service: CreateTripService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateTripService],
    }).compile();

    service = module.get<CreateTripService>(CreateTripService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
