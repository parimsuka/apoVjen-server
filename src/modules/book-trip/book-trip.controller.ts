import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { BookTripService } from './book-trip.service';
import { getFirestore } from 'firebase-admin/firestore';

var admin = require('firebase-admin');

@Controller('book-trip')
export class BookTripController {
  constructor(private readonly bookTripService: BookTripService) {}

  @Post()
  async bookTrip(@Body() data: {userID: string, tripID: string}) {
    return getFirestore().collection('trips')
          .doc(data.tripID)
          .update({availablePlaces: admin.firestore.FieldValue.increment(-1),
            bookedBy: admin.firestore
                                  .FieldValue
                                  .arrayUnion(data.userID)});
  }

  @Delete('')
  async deleteUserFromBookedTrip(@Query('tripID') tripID: string,
  @Query('userID') userID: string) {
    return getFirestore().collection('trips')
    .doc(tripID)
    .update({availablePlaces: admin.firestore.FieldValue.increment(1),
      bookedBy: admin.firestore
                            .FieldValue
                            .arrayRemove(userID)});
  }

  @Get(':id')
  async getTripsWithIdOwner(@Param('id') id: string) {
    const tripsQuery = await getFirestore().collection('trips').where("username", "==", id).get();
    return tripsQuery.docs.map((querySnapshot2) => ({
      ...querySnapshot2.data()
    }))
  }
}
