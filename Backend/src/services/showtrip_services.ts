// bearbeitet von Marcia Perez Heilig

import { Trip }from '../models/trip';
import { trips } from "../data/trip_list";

// Return array of Trip objects from data
export const getAllTrips = (): Array<Trip> => {
    return trips;
}

// Return a Trip object from the array matching the given ID
export const getTripById = (tripId: number): Trip | undefined => {
    return trips.find((trip) => trip.id === tripId);
};