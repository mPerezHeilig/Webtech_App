// bearbeitet von Marcia Perez Heilig

import { useState, useEffect } from "react";
import { fetchTripById } from "@/services/showTripsService";
import { fetchCountryOptions, fetchTourguideOptions } from "@/services/formOptionsService";
import { TripProps } from "@/types/TripProps";

//Custom hook to fetch data needed for editing a trip.
export const useEditTripData = (id: string) => {
  const [trip, setTrip] = useState<TripProps | null>(null); // State for the trip data
  const [countryOptions, setCountryOptions] = useState<string[]>([]); // State for country options
  const [tourguideOptions, setTourguideOptions] = useState<string[]>([]); // State for tour guide options
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState<string | null>(null); // State to track errors

  useEffect(() => {
    //Fetches trip data, country options, and tour guide options.
    const loadData = async () => {
        try {
            const [fetchedTrip, countries, tourguides] = await Promise.all([
                fetchTripById(id), // Fetch the trip by ID
                fetchCountryOptions(), // Fetch country options
                fetchTourguideOptions(), // Fetch tour guide options
            ]);

        setTrip(fetchedTrip); // Update trip state
        setCountryOptions(countries || []); // Update country options state
        setTourguideOptions(tourguides || []); // Update tour guide options state
        } catch (err) {
            setError("Failed to load data for editing.");
        } finally {
            setLoading(false); // Stop loading spinner
        }
    };

    loadData(); // Trigger data fetching
    }, [id]); // Re-run effect when ID changes

    return { trip, countryOptions, tourguideOptions, loading, error }; // Return all states
};