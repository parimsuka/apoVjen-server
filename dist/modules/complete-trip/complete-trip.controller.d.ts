import { CompleteTripService } from './complete-trip.service';
export declare class CompleteTripController {
    private readonly completeTripService;
    constructor(completeTripService: CompleteTripService);
    completeTripById(id: string): Promise<void>;
}
