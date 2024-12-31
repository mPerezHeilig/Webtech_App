// bearbeitet von Marcia Perez Heilig

import axios from "axios";

export async function addTrip(newTrip: {
    name: string;
    departure_date: string;
    return_date: string;
    dest_country: string;
    tourguide: string;
}) {
    try {
        const response = await axios.post("http://localhost:8084/api/trips", newTrip);
        return response.data;
    } catch (error) {
        console.error("Error adding the trip:", error);
        throw error;
    }
}