// bearbeitet von Marcia Perez Heilig

import Journey from '../models/Journey';
import { ITrip } from '../models/Journey';

// Retrieve all trips from the database
export const getAllTrips = async (): Promise<ITrip[]> => {
    const trips = await Journey.find();
    
    return trips;
};

// Function to return a Trip object from the database matching the given ID
export const getTripById = async (tripId: string): Promise<ITrip | null> => {
    return await Journey.findById(tripId);
};