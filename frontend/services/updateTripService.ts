// bearbeitet von Marcia Perez Heilig

import axios from "axios";
import { TripProps } from "@/types/TripProps";

export async function updateTrip(updatedTrip: TripProps) {
    const token = localStorage.getItem("authToken");
    if (!token) {
        throw new Error("Not authenticated. Please log in.");
    }

    try {
        await axios.put(
            `http://localhost:8084/api/trips/${updatedTrip.id}`,
            updatedTrip,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
    } catch (error: any) {
        console.error("Error updating trip:", error);
        throw new Error(
            error.response?.data?.message || "Failed to update the trip. Please try again."
        );
    }
}