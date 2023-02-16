import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ReviewService } from './review.service';
import { getFirestore } from 'firebase-admin/firestore';
import { Review } from '../model/review';

var admin = require('firebase-admin');

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {

  }

  @Get()
  async getReviewsById(@Query('id') id: string) {
    return getFirestore().collection('reviews').where('from', '==', id).onSnapshot(querySnapshot => {
      // querySnapshot.docChanges().forEach(change => {
      //   return getFirestore().collection('reviews').where('from', '==', id);
      // });
      return querySnapshot;
    });
  }

  @Post()
  async postReview(@Body() review: Review) {
    return getFirestore().collection('reviews').add(JSON.parse(JSON.stringify(review)));
  }
}
