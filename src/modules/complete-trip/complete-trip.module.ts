import { Module } from '@nestjs/common';
import { CompleteTripService } from './complete-trip.service';
import { CompleteTripController } from './complete-trip.controller';

@Module({
  controllers: [CompleteTripController],
  providers: [CompleteTripService]
})
export class CompleteTripModule {}
