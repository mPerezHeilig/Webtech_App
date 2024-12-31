// bearbeitet von Marcia Perez Heilig

"use client";

import { useState, useEffect } from "react";
import styles from "@/css/form.module.css";
import btn_styles from "@/css/button.module.css";
import FormGroup from "@/components/Form/FormGroup";
import Button from "@/components/Buttons/Button";
import { addTrip } from "@/services/addTripService";
import { updateTrip } from "@/services/updateTripService"; 
import { fetchTripById } from "@/services/showTripsService"; 
import Link from "next/link";

/* Form component for creating or editing a trip.
Handles both trip creation and editing depending on the provided props. */
export default function Form({
    countryOptions,
    tourguideOptions,
    tripId,
}: {
    countryOptions: string[];
    tourguideOptions: string[];
    tripId?: number; // tripId is optional, used when editing a trip
}) {
    // State to store form input values
    const [formData, setFormData] = useState({
        id: 0,
        name: "",
        departure_date: "",
        return_date: "",
        dest_country: "",
        tourguide: "",
    });

    const [isEditing, setIsEditing] = useState(false); // Flag to track whether we're editing an existing trip

    // Fetch the trip data if tripId is provided (i.e., we're editing)
    useEffect(() => {
        if (tripId) {
            const loadTripData = async () => {
                const trip = await fetchTripById(tripId);
                if (trip) {
                    setFormData({
                        id: trip.id,
                        name: trip.name,
                        departure_date: trip.departure_date,
                        return_date: trip.return_date,
                        dest_country: trip.dest_country,
                        tourguide: trip.tourguide,
                    });
                    setIsEditing(true); // Set editing mode to true
                }
            };

            loadTripData();
        }
    }, [tripId]);

    // Updates the form data state when an input value changes.
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    /* Handles form submission.
    Prevents default form submission behavior.
    Calls the onSubmit callback with the form data. */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isEditing && tripId) {
                // Use your updateTrip service to update the trip
                await updateTrip(formData);
                alert("Trip successfully updated!");
            } else {
                await addTrip(formData); // Save the new trip data to the API
                alert("Trip successfully added!");
            }
        } catch (error) {
            console.error("Error saving the trip:", error);
            alert("Failed to save the trip. Please try again.");
        }
    };

    return (
        <form className={styles.tripForm} onSubmit={handleSubmit}>
            <FormGroup
                formgroup={{
                    label: "Name:",
                    type: "text",
                    name: "name",
                    placeholder: "Name your Trip",
                }}
                value={formData.name}
                onChange={handleInputChange}
            />

            <FormGroup
                formgroup={{
                    label: "Departure Date:",
                    type: "date",
                    name: "departure_date",
                }}
                value={formData.departure_date}
                onChange={handleInputChange}
            />

            <FormGroup
                formgroup={{
                    label: "Return Date:",
                    type: "date",
                    name: "return_date",
                }}
                value={formData.return_date}
                onChange={handleInputChange}
            />

            <FormGroup
                formgroup={{
                    label: "Country:",
                    name: "dest_country",
                    placeholder: "Choose Country",
                    options: countryOptions,
                }}
                value={formData.dest_country || "placeholder"}
                onChange={handleInputChange}
            />

            <FormGroup
                formgroup={{
                    label: "Tourguide:",
                    name: "tourguide",
                    placeholder: "Choose Tourguide",
                    options: tourguideOptions,
                }}
                value={formData.tourguide || "placeholder"}
                onChange={handleInputChange}
            />

            <div>
                <Button
                    button={{
                        text: isEditing ? "Update Trip" : "Add Trip",
                        className: btn_styles.alarmButton,
                        type: "submit",
                    }}
                />
                <Link href="/showtrips">
                    <Button button={{ text: "Show Trip Collection", type: "button" }} />
                </Link>
            </div>
        </form>
    );
}