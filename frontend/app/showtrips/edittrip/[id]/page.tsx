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
import RouteProtector from "@/components/RouteProtector";

/* Page component for editing a trip by its ID */
export default function EditTrip({ params }: { params: { id: string } }) {
    return (
        <RouteProtector>
            <EditTripContent params={params} />
        </RouteProtector>
    );
}

function EditTripContent({ params }: { params: { id: string } }) {
    const [trip, setTrip] = useState<TripProps | null>(null);
    const [countryOptions, setCountryOptions] = useState<string[]>([]);
    const [tourguideOptions, setTourguideOptions] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const loadData = async () => {
            try {
                const fetchedTrip = await fetchTripById(params.id);
                const countries = await fetchCountryOptions();
                const tourguides = await fetchTourguideOptions();

                setTrip(fetchedTrip);
                setCountryOptions(countries || []);
                setTourguideOptions(tourguides || []);
            } catch (err) {
                setError("Failed to load data for editing.");
            }
        };

        loadData();
    }, [params.id]);

    const handleUpdateTrip = async (updatedTrip: TripProps) => {
        try {
            await updateTrip(updatedTrip);
            alert("Trip successfully updated!");
            router.push("/showtrips");
        } catch (err) {
            alert("Failed to update trip. Please try again.");
            console.error(err);
        }
    };

    if (error) {
        return (
            <div id={styles.main}>
                <p>Error: {error}</p>
            </div>
        );
    }

    if (!trip || !countryOptions.length || !tourguideOptions.length) {
        return (
            <div id={styles.main}>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div id={styles.main}>
            <h1>Travel Planner</h1>
            <div className={styles.displaycard}>
                <h2>Edit Trip</h2>
                <Form
                    countryOptions={countryOptions || []}
                    tourguideOptions={tourguideOptions || []}
                    tripId={params.id}
                />
            </div>
        </div>
    );
}