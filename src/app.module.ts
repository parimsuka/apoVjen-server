import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './modules/register/register.module';
import { CreateTripModule } from './modules/create-trip/create-trip.module';
import { UsersModule } from './modules/users/users.module';
import { StorageModule } from './modules/storage/storage.module';
import { BookTripModule } from './modules/book-trip/book-trip.module';
import { ChatModule } from './modules/chat/chat.module';
import { ReviewModule } from './modules/review/review.module';
import { CompleteTripModule } from './modules/complete-trip/complete-trip.module';

@Module({
  imports: [RegisterModule, CreateTripModule, UsersModule, StorageModule, BookTripModule, ChatModule, ReviewModule, CompleteTripModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
