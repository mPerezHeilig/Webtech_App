// bearbeitet von Marcia Perez Heilig

"use client";

import { useState, useEffect } from "react";
import styles from "@/css/page.module.css";
import { fetchTripById } from "@/services/showTripsService";
import { fetchCountryOptions, fetchTourguideOptions } from "@/services/formOptionsService";
import { updateTrip } from "@/services/updateTripService";
import Form from "@/components/Form/Form";
import { useRouter } from "next/navigation";
import { TripProps } from "@/types/TripProps";

/* Page component for editing a trip by its ID.
- Fetches the trip, country options, and tour guide options.
- Handles the form submission to update the trip. */
export default function EditTrip({ params }: { params: { id: string } }) {
    // State to store the trip data
    const [trip, setTrip] = useState<TripProps | null>(null);
    // State to store country options
    const [countryOptions, setCountryOptions] = useState<string[]>([]);
    // State to store tourguide options
    const [tourguideOptions, setTourguideOptions] = useState<string[]>([]);
    // State for handling errors
    const [error, setError] = useState<string | null>(null);
    // Router instance for navigation
    const router = useRouter();

    // Fetch all necessary data when the component mounts
    useEffect(() => {
        const loadData = async () => {
            try {
                // Fetch the trip by ID
                const fetchedTrip = await fetchTripById(params.id);
                const countries = await fetchCountryOptions(); // Fetch country options
                const tourguides = await fetchTourguideOptions(); // Fetch tourguide options

                // Update the trip state
                setTrip(fetchedTrip);
                setCountryOptions(countries || []); // Update the country options state
                setTourguideOptions(tourguides || []); // Update the tour guide options state
            } catch (err) {
                setError("Failed to load data for editing.");
            }
        };

        loadData(); // Trigger the fetch
    }, [params.id]); // Run effect when the trip id changes

    // Handles the form submission to update the trip
    const handleUpdateTrip = async (updatedTrip: TripProps) => {
        try {
            // Call the service to update the trip
            await updateTrip(updatedTrip);
            alert("Trip successfully updated!");
            // Redirect to the trips collection page
            router.push("/showtrips");
        } catch (err) {
            alert("Failed to update trip. Please try again.");
            console.error(err);
        }
    };

    // Prevent rendering before trip data is fetched
    if (error) return <div>Error: {error}</div>;
    // Render a loading state until all data is fetched
    if (!trip || !countryOptions.length || !tourguideOptions.length) return <div>Loading...</div>;

    // Render the form with preloaded data and options
    return (
        <div id={styles.main}>
            <h1>Travel Planner</h1>
            <div className={styles.displaycard}>
                <h2>Edit Trip</h2>
                <Form 
                    countryOptions={countryOptions || []} 
                    tourguideOptions={tourguideOptions || []} 
                    tripId={params.id} // Pass tripId for editing
                />
            </div>
        </div>
    );
}