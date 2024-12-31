// bearbeitet von Marcia Perez Heilig

import axios from "axios";
import { TripProps } from "@/types/TripProps";

export async function updateTrip(updatedTrip: TripProps) {
    try {
        await axios.put(`http://localhost:8084/api/trips/${updatedTrip.id}`, updatedTrip);
    } catch (error) {
        console.error("Error updating trip:", error);
        throw error;
    }
}