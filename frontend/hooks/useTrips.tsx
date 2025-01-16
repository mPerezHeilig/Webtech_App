// bearbeitet von Marcia Perez Heilig

import { useState, useEffect } from "react";
import { fetchTrips } from "@/services/showTripsService";
import { deleteTripById } from "@/services/deleteTripsService";
import { TripProps } from "@/types/TripProps";

// Custom hook to manage trips. Handles fetching, deletion, and state management for trip data.
export const useTrips = () => {
    // State to store the list of trips
    const [trips, setTrips] = useState<Array<TripProps>>([]);
    // State to handle errors during data fetching
    const [error, setError] = useState<string | null>(null);
    // State to track whether data is being loaded
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetches trip data from the backend and updates the state.
        const loadTrips = async () => {
            try {
                // Call service to fetch trip data
                const tripsData = await fetchTrips();
                // Update state with fetched trips
                setTrips(tripsData);
            } catch (err) {
                setError("Failed to fetch trips");
            } finally {
                // Stop loading indicator
                setLoading(false);
            }
        };
        // Trigger the data fetch on component mount
        loadTrips();
    }, []);

    // Deletes a trip by ID and updates the state to remove it from the list.
    const deleteTrip = async (id: string) => {
        try {
            // Call service to delete trip
            await deleteTripById(id);
            // Remove the deleted trip from the state
            setTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== id));
        } catch (error) {
            console.error(`Failed to delete trip with ID ${id}:`, error);
        }
    };

    // Expose trips, error, loading state, deleteTrip handler, and setTrips for external usage
    return { trips, loading, error, deleteTrip, setTrips };
};