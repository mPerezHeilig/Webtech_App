// bearbeitet von Marcia Perez Heilig

import { Trip } from "../models/trip";
import { trips } from "../data/trip_list";

export const addNewTrip = (json: any): Trip => {
    // Extracts the required trip details
    const { name, dest_country, departure_date, return_date, tourguide } = json;

    // Create a new Trip object
    const newTrip = new Trip(name, dest_country, departure_date, return_date, tourguide);

    // Add the trip to the temporary trips list
    trips.push(newTrip);

    // Return the newly created trip
    return newTrip;
};
