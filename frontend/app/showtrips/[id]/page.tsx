// bearbeitet von Marcia Perez Heilig

"use client";

import styles from "@/css/page.module.css";
import { use } from "react";
import ListItem from "@/components/TripCollection/ListItem";
import { deleteTripById } from "@/services/deleteTripsService";
import { useRouter } from "next/navigation";
import { useTrip } from "@/hooks/useTrip";
import RouteProtector from "@/components/RouteProtector";

export default function ShowTripByID({ params }: { params: Promise<{ id: string }> }) {
    return (
        <RouteProtector>
            <ShowTripByIDContent params={params} />
        </RouteProtector>
    );
}

function ShowTripByIDContent({ params }: { params: Promise<{ id: string }> }) {
    const unwrapped = use(params);
    const id = unwrapped.id;
    const { trip, error, loading } = useTrip(id);
    const router = useRouter();

    const handleDeleteTrip = async () => {
        const confirmation = confirm("Are you sure you want to delete this trip?");
        if (confirmation) {
            await deleteTripById(id);
            alert("Trip deleted successfully!");
            router.push("/showtrips");
        }
    };

    const handleEditTrip = () => {
        router.push(`/edittrips/${id}`);
    };

    if (loading) {
        return (
            <div id={styles.main}>
                <p>Loading trip details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div id={styles.main}>
                <p>Error loading trip: {error}. Please try again later.</p>
            </div>
        );
    }

    return (
        <div id={styles.main}>
            {trip ? (
                <ListItem
                    key={trip.id}
                    trip_info={trip}
                    onEditTrip={handleEditTrip}
                    onDeleteTrip={handleDeleteTrip}
                />
            ) : (
                <p>Trip not found.</p>
            )}
        </div>
    );
}