// bearbeitet von Marcia Perez Heilig

import { Trip }from '../models/trip';
import Journey from '../models/Journey';

// Retrieve all trips from the database
export const getAllTrips = async (): Promise<any[]> => {
    console.log('getAllTrips called');
    const trips = await Journey.find();
    
    return trips;
};

// Function to return a Trip object from the database matching the given ID
export const getTripById = async (tripId: number): Promise<Trip | null> => {
    // Use the Mongoose model to find the trip by its id
    return await Journey.findOne({ _id: tripId });
};