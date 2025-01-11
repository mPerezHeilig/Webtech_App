// bearbeitet von Marcia Perez Heilig

import axios from "axios";
import { TripProps } from "@/types/TripProps";

export async function addTrip(newTrip: TripProps) {
    try {
        const response = await axios.post("http://localhost:8084/api/trips", newTrip);
        return response.data;
    } catch (error) {
        console.error("Error adding the trip:", error);
        throw error;
    }
}