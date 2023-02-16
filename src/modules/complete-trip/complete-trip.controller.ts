import { Controller, Param, Post } from '@nestjs/common';
import { CompleteTripService } from './complete-trip.service';
import { getFirestore } from 'firebase-admin/firestore';

var admin = require('firebase-admin');

@Controller('complete-trip')
export class CompleteTripController {
  constructor(private readonly completeTripService: CompleteTripService) {}

  @Post(':id')
  async completeTripById(@Param('id') id: string) {
    getFirestore().collection('trips').doc(id).update({completed: true});
  }
}
