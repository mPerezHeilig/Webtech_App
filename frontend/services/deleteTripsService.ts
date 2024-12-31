// bearbeitet von Marcia Perez Heilig

import axios from "axios";

export async function deleteAllTrips(): Promise<void> {
    if (confirm('Are you sure you want to delete all trips? There\'s no turning back!')) {
        try {
            await axios.delete('http://localhost:8084/api/trips');
            alert('All trips deleted successfully!');
        } catch (error) {
            console.error('Error deleting all trips:', error);
            alert('Failed to delete all trips. Please try again.');
        }
    };
}

export async function deleteTripById(id: number): Promise<void> {
    if (confirm('Are you sure you want to delete this trip?')) {
        try {
            await axios.delete(`http://localhost:8084/api/trips/${id}`);
        } catch (error) {
            console.error(`Error deleting trip with ID ${id}:`, error);
            alert('Failed to delete trip. Please try again.');
        }
    }
}