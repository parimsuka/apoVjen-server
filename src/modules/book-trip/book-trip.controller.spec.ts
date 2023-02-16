import { Test, TestingModule } from '@nestjs/testing';
import { BookTripController } from './book-trip.controller';
import { BookTripService } from './book-trip.service';

describe('BookTripController', () => {
  let controller: BookTripController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookTripController],
      providers: [BookTripService],
    }).compile();

    controller = module.get<BookTripController>(BookTripController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
