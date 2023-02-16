import { Test, TestingModule } from '@nestjs/testing';
import { CompleteTripController } from './complete-trip.controller';
import { CompleteTripService } from './complete-trip.service';

describe('CompleteTripController', () => {
  let controller: CompleteTripController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompleteTripController],
      providers: [CompleteTripService],
    }).compile();

    controller = module.get<CompleteTripController>(CompleteTripController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
