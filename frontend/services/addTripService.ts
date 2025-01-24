// bearbeitet von Marcia Perez Heilig

import axios from "axios";
import { TripProps } from "@/types/TripProps";

export async function addTrip(newTrip: TripProps) {
    const token = localStorage.getItem("authToken");
    if (!token) {
        throw new Error("You are not authenticated. Please log in.");
    }

    try {
        const response = await axios.post(
            "http://localhost:8084/api/trips",
            newTrip,
            {
                headers: { Authorization: `Bearer ${token}` }, // Include the Authorization header
            }
        );
        return response.data;
    } catch (error: any) {
        console.error("Error adding the trip:", error);
        throw new Error(
            error.response?.data?.message || "Failed to add the trip. Please try again."
        );
    }
}