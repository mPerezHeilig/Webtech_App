// bearbeitet von Marcia Perez Heilig

import Journey from '../models/Journey';
import { Trip } from "../models/trip";
import { trips } from "../data/trip_list";

export const deleteTripById = (id: number): boolean => {
    // Find the index of the trip with the given ID
    const index = trips.findIndex(trip => trip.id === id);

    if (index !== -1) {
        trips.splice(index, 1); // Remove the trip
        return true;
    }

    return false; // Trip not found
};

export const deleteAllTrips = async (): Promise<void> => {
    // Delete all documents from the 'journeys' collection
    await Journey.deleteMany({});
}