import { Test, TestingModule } from '@nestjs/testing';
import { BookTripService } from './book-trip.service';

describe('BookTripService', () => {
  let service: BookTripService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookTripService],
    }).compile();

    service = module.get<BookTripService>(BookTripService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
