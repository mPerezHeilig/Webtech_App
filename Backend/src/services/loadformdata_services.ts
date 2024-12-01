// bearbeitet von Marcia Perez Heilig

import { countries, tourguides } from "../data/trip_options";

// Return an array of type string containing country options
export const getAllCountries = (): Array<string> => {
    return countries;
};

// Return an array of type string containing tourguide options
export const getAllTourguides = (): Array<string> => {
    return tourguides;
};

