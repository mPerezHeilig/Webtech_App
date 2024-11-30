// bearbeitet von Marcia Perez Heilig

import { Trip } from "../models/trip";
import { trips } from "../data/trip_list";

let selectedTripId: number;

export const saveTripId = (tripId: number): void => {
    selectedTripId = tripId;
}

export const fetchTripId = (): number | null => {
    return selectedTripId || null; // Return null if `selectedTripId` is undefined
};

export const updateTrip = (id: number, departure_date: string, return_date: string, dest_country: string, tourguide: string): Trip | null => {
    const updatedTrip = trips.find(trip => trip.id === id);

    if (!updatedTrip) {
        return null;
    }

    // Apply updates to the trip
    updatedTrip.departure_date = departure_date;
    updatedTrip.return_date = return_date;
    updatedTrip.dest_country = dest_country;
    updatedTrip.tourguide = tourguide;

    return updatedTrip;
};