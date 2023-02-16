import { Test, TestingModule } from '@nestjs/testing';
import { CreateTripController } from './create-trip.controller';
import { CreateTripService } from './create-trip.service';

describe('CreateTripController', () => {
  let controller: CreateTripController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateTripController],
      providers: [CreateTripService],
    }).compile();

    controller = module.get<CreateTripController>(CreateTripController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
