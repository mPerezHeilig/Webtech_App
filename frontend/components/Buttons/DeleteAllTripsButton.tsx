// bearbeitet von Marcia Perez Heilig

"use client";

import { useState } from "react";
import Button from "@/components/Buttons/Button";
import { deleteAllTrips } from "@/services/deleteTripsService";
import btn_styles from "@/css/button.module.css";


/* * Component for deleting all trips.
Displays a button to trigger the deletion of all trips.
Handles errors if the deletion fails. */
export default function DeleteAllTripsButton({ onDeleteAll }: { onDeleteAll: () => void }) {
    const [error, setError] = useState<string | null>(null);

    const handleDeleteAllTrips = async () => {
        try {
            await deleteAllTrips();
            onDeleteAll(); // Call the parent's function to update state
        } catch (error) {
            setError("Failed to delete all trips");
        }
    };

    return (
        <div>
            {error && <p>{error}</p>}
            <Button
                button={{
                    text: "Delete All Trips",
                    className: btn_styles.alarmButton,
                    type: "button",
                    onClick: handleDeleteAllTrips,
                }}
            />
        </div>
    );
}