import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTripService } from './create-trip.service';
import * as firebase from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { Trip } from '../model/trip';

@Controller('create-trip')
export class CreateTripController {
  constructor(private readonly createTripService: CreateTripService) {}

  @Post()
  async createTrip(@Body() trip: Trip) {
    const newTrip = await getFirestore().collection('trips').add(JSON.parse(JSON.stringify(trip)));
    // .catch(error => {
    //   console.error("Error adding document: ", error);
    // });

    getFirestore().collection('trips').doc(newTrip.id).update({id: newTrip.id});
    return newTrip.id;
  }

  @Get('getAllTrips')
  async getAllTrips() {
    const tripsQuery = await getFirestore().collection('trips').get();
    return tripsQuery.docs.map((querySnapshot2) => ({
      ...querySnapshot2.data()
    }))
  }

  @Get(':id')
  async getTripsNumberWithIdOwner(@Param('id') id: string) {
    return  (await getFirestore().collection('trips').where("username", "==", id).get()).size;
  }

  @Delete(':id')
  deleteTrip(@Param('id') id: string) {
    getFirestore().collection('trips').doc(id).delete();

    getFirestore().collection('messages').where('tripID', '==', id).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
      });
    });
  }
}
