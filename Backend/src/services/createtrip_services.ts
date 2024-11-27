// bearbeitet von Marcia Perez Heilig

import { Trip } from "../models/trip";
import { trips } from "../data/trip_list";

export const addNewTrip = (json: any): Trip => {
    const { dest_country, departure_date, return_date, tourguide } = json;

    // Create a new Trip object
    const newTrip = new Trip(dest_country, departure_date, return_date, tourguide);

    // Add the trip to the in-memory trips list
    trips.push(newTrip);

    return newTrip; // Return the newly created trip
};
