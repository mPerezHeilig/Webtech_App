// bearbeitet von Marcia Perez Heilig

import axios from "axios";
import { TripProps } from "@/types/TripProps";

// Helper function to get the Authorization header
function getAuthHeader() {
    const token = localStorage.getItem("authToken");
    if (!token) {
        throw new Error("No token found");
    }
    return { Authorization: `Bearer ${token}` };
}

// Fetch all trips
export async function fetchTrips() {
    try {
        const response = await axios.get("http://localhost:8084/api/trips", {
            headers: getAuthHeader(),
        });

        return response.data.map((trip: any) => ({
            id: trip._id,
            name: trip.name,
            departure_date: formatDate(trip.departure_date) as string,
            return_date: formatDate(trip.return_date) as string,
            dest_country: trip.dest_country,
            tourguide: trip.tourguide,
        }));
    } catch (error) {
        console.error("ERROR: Trips could not be loaded.", error);
        throw error;
    }
}

// Wrapper function to fetch trips with error handling
export async function getTrips() {
    try {
        const trips = await fetchTrips();
        return trips;
    } catch (error) {
        console.error("Failed to fetch trips:", error);
        return [];
    }
}

// Fetch a specific trip by ID
export async function fetchTripById(id: string): Promise<TripProps | null> {
    try {
        const response = await axios.get(`http://localhost:8084/api/trips/${id}`, {
            headers: getAuthHeader(),
        });

        const trip = response.data;

        return {
            id: trip._id,
            name: trip.name,
            departure_date: formatDate(trip.departure_date) as string,
            return_date: formatDate(trip.return_date) as string,
            dest_country: trip.dest_country,
            tourguide: trip.tourguide,
        };
    } catch (error) {
        console.error(`Error fetching trip with ID ${id}:`, error);
        return null;
    }
}

// Helper function to format dates
function formatDate(date: string | undefined): string | undefined {
    if (!date) return undefined;
    return new Date(date).toISOString().slice(0, 10);
}