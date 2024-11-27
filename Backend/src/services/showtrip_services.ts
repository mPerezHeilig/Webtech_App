// bearbeitet von Marcia Perez Heilig

import { Trip }from '../models/trip';
import { trips } from "../data/trip_list";

export const getAllTrips = (): Array<Trip> => {
    return trips;
}