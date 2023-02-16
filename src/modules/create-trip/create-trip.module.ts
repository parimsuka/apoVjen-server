import { Module } from '@nestjs/common';
import { CreateTripService } from './create-trip.service';
import { CreateTripController } from './create-trip.controller';

@Module({
  controllers: [CreateTripController],
  providers: [CreateTripService]
})
export class CreateTripModule {}
