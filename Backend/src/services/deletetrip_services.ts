// bearbeitet von Marcia Perez Heilig

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

export const deleteAllTrips = () => {
    trips.length = 0; // Clear all trips from the array
    Trip.resetCurrentId(); // Reset ID counter
}