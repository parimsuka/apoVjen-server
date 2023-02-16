import { ReviewService } from './review.service';
import { Review } from '../model/review';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    getReviewsById(id: string): Promise<() => void>;
    postReview(review: Review): Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>>;
}
