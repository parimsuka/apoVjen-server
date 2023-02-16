import { CreateTripService } from './create-trip.service';
import { Trip } from '../model/trip';
export declare class CreateTripController {
    private readonly createTripService;
    constructor(createTripService: CreateTripService);
    createTrip(trip: Trip): Promise<string>;
    getAllTrips(): Promise<{
        [x: string]: any;
    }[]>;
    getTripsNumberWithIdOwner(id: string): Promise<number>;
    deleteTrip(id: string): void;
}
