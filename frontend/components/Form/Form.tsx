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

export default function Form({
    countryOptions,
    tourguideOptions,
    tripId,
}: {
    countryOptions: string[];
    tourguideOptions: string[];
    tripId?: string; // tripId is optional, used when editing a trip
}) {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        departure_date: "",
        return_date: "",
        dest_country: "",
        tourguide: "",
    });

    const [error, setError] = useState<string>("");
    const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        async function loadTripData() {
            if (!tripId) return;
            try {
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
                    setIsEditing(true);
                }
            } catch {
                setError("Failed to load trip data.");
            }
        }
        loadTripData();
    }, [tripId]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setValidationErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validateForm = () => {
        const errors: { [key: string]: string } = {};

        if (!formData.name.trim()) errors.name = "Trip name is required.";
        if (!formData.departure_date) errors.departure_date = "Departure date is required.";
        if (!formData.return_date) errors.return_date = "Return date is required.";
        if (!formData.dest_country) errors.dest_country = "Destination country is required.";
        if (!formData.tourguide) errors.tourguide = "Tour guide is required.";

        if (formData.departure_date && formData.return_date && new Date(formData.return_date) < new Date(formData.departure_date)) {
            errors.return_date = "Return date cannot be earlier than departure date.";
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            alert("There are some errors you need to fix before submitting.");
            return;
        }

        try {
            if (isEditing) {
                await updateTrip(formData);
                alert("Trip successfully updated!");
            } else {
                await addTrip(formData);
                alert("Trip successfully added!");
            }
        } catch (err) {
            console.error("Error saving the trip:", err);
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
                error={validationErrors.name}
            />

            <FormGroup
                formgroup={{
                    label: "Departure Date:",
                    type: "date",
                    name: "departure_date",
                }}
                value={formData.departure_date}
                onChange={handleInputChange}
                error={validationErrors.departure_date}
            />

            <FormGroup
                formgroup={{
                    label: "Return Date:",
                    type: "date",
                    name: "return_date",
                }}
                value={formData.return_date}
                onChange={handleInputChange}
                error={validationErrors.return_date}
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
                error={validationErrors.dest_country}
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
                error={validationErrors.tourguide}
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