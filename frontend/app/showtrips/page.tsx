// bearbeitet von Marcia Perez Heilig

"use client";

import styles from "@/css/page.module.css";
import TripCollection from "@/components/TripCollection/TripCollection";
import Button from "@/components/Buttons/Button";
import DeleteAllTripsButton from "@/components/Buttons/DeleteAllTripsButton";
import Link from "next/link";
import { useTrips } from "@/hooks/useTrips";

/* Component to display the trip collection page.
Fetches and manages trip data, displays a list of trips, and provides controls for deleting trips. */
export default function ShowTrips() {
    // Destructure state and handlers from the custom hook
    const { trips, loading, error, deleteTrip, setTrips } = useTrips();

    /* Clears all trips by setting the state to an empty array.
   This function is called by the DeleteAllTripsButton component. */
    const handleDeleteAllTrips = () => {
        setTrips([]);
  };

    // Display a loading indicator while trips are being fetched
    if (loading) return <div>Loading trips...</div>;

    // Display an error message if fetching trips fails
    if (error) return <div>Error loading trips: {error}. Please try again later.</div>;

    return (
    <div id={styles.main}>
        <h1>Travel Planner</h1>
        <div className={styles.displaycard}>
            <h2>Trip Collection</h2>
            {/* Conditional rendering: show trips or a message if there are no trips */}
            {trips.length > 0 ? (
                <>
                    <TripCollection 
                        trips={trips} 
                        onDeleteTrip={deleteTrip} // Pass delete handler to TripCollection
                        onEditTrip={(id) => console.log(`Edit trip with ID: ${id}`)} // Placeholder for edit functionality
                    />
                    <div>
                        <Link href="/createtrip">
                            <Button button={{ text: "Create New Trip", type: "button" }} />
                        </Link>
                        <DeleteAllTripsButton onDeleteAll={handleDeleteAllTrips} />
                    </div>
                </>
            ) : (
                <>
                    {/* Message displayed when there are no trips */}
                    <p>No trips added yet.<br/>Better start planning!</p>
                    <div>
                        <Link href="/createtrip">
                            <Button button={{ text: "Create New Trip", type: "button" }} />
                        </Link>
                    </div>
                </>
            )}
        </div>
    </div>
    );
}