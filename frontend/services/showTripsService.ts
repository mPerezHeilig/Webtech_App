// bearbeitet von Marcia Perez Heilig

import axios from "axios";
import { TripProps } from "@/types/TripProps";

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
        console.error("ERR0R: Trips could not be loaded.", error);
        throw error;
    }
}

export async function getTrips() {
    try {
        const trips = await fetchTrips();
        return trips;
    } catch (error) {
        console.error("Failed to fetch trips:", error);
        return [];
    }
}

export async function fetchTripById(id: number): Promise<TripProps | null> {
    try {
        const response = await axios.get(`http://localhost:8084/api/trips/${id}`);
        const trip = response.data;

        return {
            id: trip._id,
            name: trip._name,
            departure_date: trip._departure_date,
            return_date: trip._return_date,
            dest_country: trip._dest_country,
            tourguide: trip._tourguide,
        };
    } catch (error) {
        console.error(`Error fetching trip with ID ${id}:`, error);
        return null;
    }
}