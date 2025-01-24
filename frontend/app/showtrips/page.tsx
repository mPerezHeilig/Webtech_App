// bearbeitet von Marcia Perez Heilig

"use client";

import styles from "@/css/page.module.css";
import TripCollection from "@/components/TripCollection/TripCollection";
import Button from "@/components/Buttons/Button";
import DeleteAllTripsButton from "@/components/Buttons/DeleteAllTripsButton";
import Link from "next/link";
import { useTrips } from "@/hooks/useTrips";
import RouteProtector from "@/components/RouteProtector";

export default function ShowTrips() {
    return (
        <RouteProtector>
            <ShowTripsContent />
        </RouteProtector>
    );
}

function ShowTripsContent() {
    const { trips, loading, error, deleteTrip, setTrips } = useTrips();

    const handleDeleteAllTrips = () => {
        setTrips([]);
    };

    if (loading) return <div>Loading trips...</div>;
    if (error) return <div>Error loading trips: {error}. Please try again later.</div>;

    return (
        <div id={styles.main}>
            <h1>Travel Planner</h1>
            <div className={styles.displaycard}>
                <h2>Trip Collection</h2>
                {trips.length > 0 ? (
                    <>
                        <TripCollection 
                            trips={trips} 
                            onDeleteTrip={deleteTrip}
                            onEditTrip={(id) => console.log(`Edit trip with ID: ${id}`)}
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