import { BookTripService } from './book-trip.service';
export declare class BookTripController {
    private readonly bookTripService;
    constructor(bookTripService: BookTripService);
    bookTrip(data: {
        userID: string;
        tripID: string;
    }): Promise<FirebaseFirestore.WriteResult>;
    deleteUserFromBookedTrip(tripID: string, userID: string): Promise<FirebaseFirestore.WriteResult>;
    getTripsWithIdOwner(id: string): Promise<{
        [x: string]: any;
    }[]>;
}
