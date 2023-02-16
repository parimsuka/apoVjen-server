import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as firebase from 'firebase-admin';

const serviceAccount = require("./auth/apovjen-c6238-firebase-adminsdk-zvgaq-c2f726af2c.json");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({transform: true}));

  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://apoVjen.firebaseio.com",
  });

  app.enableCors();
  
  await app.listen(3000);
}
bootstrap();
