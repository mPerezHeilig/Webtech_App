// bearbeitet von Marcia Perez Heilig

import { Request, Response } from 'express';
import { getAllTrips, getTripById } from '../services/showtrip_services';
import { addNewTrip } from '../services/createtrip_services';
import { deleteTripById, deleteAllTrips } from '../services/deletetrip_services';
import { updateTrip } from '../services/edittrip_services';

 
export const listTrips = async (res: Response) => {
    try {
        const all_trips = await getAllTrips(); // Make sure to await the async call
        res.status(200).json(all_trips); // Send trips as a JSON response
    } catch (error: any) {
        // Handle errors while fetching trips
        res.status(500).json({
            error: "An error occurred while fetching trips",
            details: error.message,
        });
    }
};

export const loadTrip = async (req: Request, res: Response) => {
    const tripId = req.params.id;
    try {
        const tripById = await getTripById(tripId);
        if (!tripById) {
            // Handling if trip not found
            res.status(404).json({ error: `Trip with ID ${tripId} not found` });
        } else {
            // Send the trip as a JSON response
            res.status(200).json(tripById);
        }
    } catch (error: any) {
        // Handle errors while fetching a trip by ID
        res.status(500).json({
            error: 'An error occurred while fetching trip by ID',
            details: error.message,
        });
    }
};

export const createTrip = async (req: Request, res: Response) => {
    try {
        const newTrip = await addNewTrip(req.body);
        res.status(201).json({
            message: "Trip created successfully",
            trip: newTrip,
        });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const editTrip = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { name, departure_date, return_date, dest_country, tourguide } = req.body;

    try {
        const updatedTrip = await updateTrip(id, name, departure_date, return_date, dest_country, tourguide);

        if (!updatedTrip) {
            // Handling if trip not found
            return res.status(404).json({ message: `Trip with ID ${id} not found` });
        }

        // Respond with updated trip details
        res.status(200).json({ message: 'Trip updated successfully', trip: updatedTrip });
    } catch (error: any) {
        // Handle errors during trip update
        res.status(500).json({
            message: 'An error occurred while updating the trip',
            error: error.message,
        });
    }
};

export const removeTrip = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const success = await deleteTripById(id);
        if (success) {
            // Delete trip by ID and respond with success message
            res.status(200).json({ message: `Trip with ID ${id} deleted successfully` });
        } else {
            // Handling if trip not found
            res.status(404).json({ message: `Trip with ID ${id} not found` });
        }
    } catch (error: any) {
        // Handle potential errors, such as invalid ObjectId formats
        res.status(400).json({ message: `Error deleting trip with ID ${id}`, error: error.message });
    }
}

export const clearTrips = async (req: Request, res: Response) => {
    try {
        // Asynchronously call the service to delete all trips
        await deleteAllTrips();
        res.status(200).json({ message: 'All trips deleted successfully' });
    } catch (error: any) {
        // Handle errors during deleting trips
        res.status(500).json({ message: 'Error occurred while deleting all trips', error: error.message });
    }
}