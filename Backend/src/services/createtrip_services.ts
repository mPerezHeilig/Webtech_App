// bearbeitet von Marcia Perez Heilig

import Journey from '../models/Journey';
import { ITrip } from '../models/Journey';
import { Trip } from "../models/trip";

export const addNewTrip = async (json: any): Promise<ITrip> => {
    // Extracts the required trip details
    const { name, dest_country, departure_date, return_date, tourguide } = json;

    // Create a new Trip object
    const trip = new Trip(name, dest_country, departure_date, return_date, tourguide);

    // Map Trip object to the Journey model
    const newTrip = new Journey({
        name: trip.name,
        dest_country: trip.dest_country,
        departure_date: trip.departure_date,
        return_date: trip.return_date,
        tourguide: trip.tourguide
    });

    await newTrip.save();

    return newTrip;
};
