// bearbeitet von Marcia Perez Heilig

"use client";

import styles from "@/css/page.module.css";
import { use } from "react";
import ListItem from "@/components/TripCollection/ListItem";
import { deleteTripById } from "@/services/deleteTripsService";
import { useRouter } from "next/navigation";
import { useTrip } from "@/hooks/useTrip";

/* Component to display details of a single trip by ID.
Provides options to edit or delete the trip. */
export default function ShowTripByID({ params }: { params: Promise<{ id: string }> }) {
    const unwrapped = use(params);
    const id = unwrapped.id; // Extract trip ID from route parameters
    const { trip, error, loading } = useTrip(id); // Use custom hook to manage trip data
    const router = useRouter();
  
    const handleDeleteTrip = async () => {
        try {
            await deleteTripById(id); // Call the delete service
            alert("Trip deleted successfully!"); // Notify user of success
            router.push("/showtrips"); // Navigate back to the trips collection
        } catch (error) {
            console.error(`Failed to delete trip with ID ${id}:`, error); 
            alert("Failed to delete trip. Please try again.");
        }
    };
  
    const handleEditTrip = () => {
        router.push(`/edittrips/${id}`); // Navigate to the edit trip page
    };
  
    if (loading) return <div id={styles.main}><p>Loading...</p></div>;
    if (error) return <div id={styles.main}><p>{error}</p></div>;
  
    return (
        <div id={styles.main}>
            {/* Conditional rendering to ensure trip is not null */}
            {trip && (
              <ListItem key={trip.id} trip_info={trip} onEditTrip={handleEditTrip} onDeleteTrip={handleDeleteTrip} />
            )}
        </div>
    );
}