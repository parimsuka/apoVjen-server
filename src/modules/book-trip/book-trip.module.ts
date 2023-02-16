import { Module } from '@nestjs/common';
import { BookTripService } from './book-trip.service';
import { BookTripController } from './book-trip.controller';

@Module({
  controllers: [BookTripController],
  providers: [BookTripService]
})
export class BookTripModule {}
