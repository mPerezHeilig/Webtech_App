// bearbeitet von Marcia Perez Heilig

"use client";

import Button from "@/components/Buttons/Button";
import Link from "next/link";  // Import Link for navigation
import styles from "@/css/tripcollection.module.css";
import btn_styles from "@/css/button.module.css";
import { TripProps } from "@/types/TripProps";

export default function ListItem({
    trip_info,
    onDeleteTrip,
    onEditTrip,  // Add the edit handler
}: {
    trip_info: TripProps;
    onDeleteTrip?: (id: number) => void;
    onEditTrip?: (id: number) => void;  // Add the edit handler
}) {
    const handleDeleteClick = () => {
        if (onDeleteTrip) {
            onDeleteTrip(trip_info.id); // Trigger deletion if the function is provided
        }
    };

    const handleEditClick = () => {
        if (onEditTrip) {
            onEditTrip(trip_info.id); // Trigger edit if the function is provided
        }
    };

    return (
        <div className={styles.listItem}>
            <h3>{trip_info.name}</h3>
            <p>Departure Date: {trip_info.departure_date}</p>
            <p>Return Date: {trip_info.return_date}</p>
            <p>Country: {trip_info.dest_country}</p>
            <p>Tourguide: {trip_info.tourguide}</p>

            <div>
                <Link href={`/showtrips/edittrip/${trip_info.id}`}>
                    <Button
                        button={{
                            text: "Edit Trip",
                            type: "button",
                            onClick: handleEditClick,
                        }}
                    />
                </Link>

                <Button
                    button={{
                        text: "Delete Trip",
                        className: btn_styles.alarmButton,
                        type: "button",
                        onClick: handleDeleteClick,
                    }}
                />
            </div>
        </div>
    );
}