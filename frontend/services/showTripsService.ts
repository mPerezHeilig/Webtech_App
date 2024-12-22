// bearbeitet von Marcia Perez Heilig

import axios from "axios";

export async function fetchTrips() {
    try {
        const response = await axios.get('http://localhost:8084/api/trips');
        return response.data.map((trip: any) => ({
            id: trip._id,
            name: trip._name,
            departure_date: trip._departure_date,
            return_date: trip._return_date,
            dest_country: trip._dest_country,
            tourguide: trip._tourguide,
        }));
        
    } catch(error) {
        console.error("ERR0R: Country options could not be loaded.", error);
    }
}