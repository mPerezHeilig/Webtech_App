// bearbeitet von Marcia Perez Heilig

import { useState, useEffect } from "react";
import { fetchTripById } from "@/services/showTripsService";
import { TripProps } from "@/types/TripProps";

// Hook to fetch and manage a single trip by ID.

export const useTrip = (id: number) => {
    // State to store the trip data
    const [trip, setTrip] = useState<TripProps | null>(null);
    // State to track loading status
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    //Fetch the trip by ID from the API and handle loading and error states.
    const fetchTrip = async () => {
        try {
            // Fetch trip data using the service
            const fetchedTrip = await fetchTripById(id);
            if (!fetchedTrip) {
                setError("Trip not found.");
            } else {
                // Update the state with fetched trip
                setTrip(fetchedTrip);
            }
        } catch (err) {
            setError("Failed to fetch trip.");
        } finally {
            // Stop the loading spinner
            setLoading(false);
        }
    };

    // Fetch trip only if an ID is provided
    if (id) fetchTrip();
  }, [id]); // Effect depends on the trip ID

    // Return trip data and state management
    return { trip, error, loading, setTrip };
};