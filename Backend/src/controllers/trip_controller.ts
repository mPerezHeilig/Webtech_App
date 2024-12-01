// bearbeitet von Marcia Perez Heilig

import { Request, Response } from 'express';
import { getAllTrips, getTripById } from '../services/showtrip_services';
import { addNewTrip } from '../services/createtrip_services';
import { deleteTripById, deleteAllTrips } from '../services/deletetrip_services';
import { saveTripId, fetchTripId, updateTrip } from '../services/edittrip_services';

 
export const listTrips = (res: Response) => {
    try {
        const all_trips = getAllTrips(); // Retrieve all trips from the service
        res.status(200).json(all_trips); // Send trips as a JSON response
    } catch (error: any) {
        // Handle errors while fetching trips
        res.status(500).json({
            error: "An error occurred while fetching trips",
            details: error.message,
        });
    }
    };

export const loadTrip = (req: Request, res: Response) => {
    const tripId = parseInt(req.params.id); // Get trip ID
    try {
        const tripById = getTripById(tripId); // Retrieve the trip by its ID
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

export const createTrip = (req: Request, res: Response) => {
    try {
        const { name, dest_country, departure_date, return_date, tourguide } = req.body;

        // Validate user input
        if (!name || !dest_country || !departure_date || !return_date || !tourguide) {
            throw new Error("All fields are required: dest_country, departure_date, return_date, tourguide");
        }

        // Pass data to service function to create the trip
        const newTrip = addNewTrip({ name, dest_country, departure_date, return_date, tourguide });

        res.status(201).json({
            message: "Trip created successfully",
            trip: newTrip, // Return the created trip
        });
    } catch (error: any) {
        // Handle validation or other errors
        res.status(400).json({ error: error.message });
    }
};

export const editTrip = (req: Request, res: Response) => {
    const id = parseInt(req.params.id); // Get trip ID
    // Get updated trip details from the request body
    const { name, departure_date, return_date, dest_country, tourguide } = req.body;

    try {
        // Update the trip
        const updatedTrip = updateTrip(id, name, departure_date, return_date, dest_country, tourguide);

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

export const removeTrip = (req: Request, res: Response) => {
    const id = parseInt(req.params.id); // Get trip ID

    if (deleteTripById(id)) {
        // Delete trip by ID and respond with success message
        res.status(200).json({ message: `Trip with ID ${id} deleted successfully` });
    } else {
        // Handling if trip not found
        res.status(404).json({ message: `Trip with ID ${id} not found` });
    }
}

export const clearTrips = (req: Request, res: Response) => {
    try {
        // Call the service to delete all trips and respond with success message
        deleteAllTrips();
        res.status(200).json({ message: 'All trips deleted successfully' });
    } catch (error: any) {
        // Handle errors during deleting trips
        res.status(500).json({ message: 'Error occurred while deleting all trips', error: error.message });
    }
}

export const postTripId = (req: Request, res: Response) => {
    try {
        const { tripId } = req.body; // Get trip ID from the request body
        if (!tripId) {
            // Validate trip ID
            return res.status(400).json({ message: 'Invalid trip ID' });
        }

        // Save the trip ID for later use and respond with success message
        saveTripId(tripId); 
        res.status(200).json({ message: 'Trip ID saved successfully' });
    } catch (error: any) {
        // Handle errors while saving trip ID
        res.status(500).json({ message: 'Error saving trip ID', error: error.message });
    }
};

export const loadTripId = (req: Request, res: Response) => {
    try {
        const tripId = fetchTripId(); // Retrieve saved trip ID
        if (tripId === null) {
            // Handling if trip ID not found
            return res.status(404).json({ message: 'No trip ID found' });
        }

        // Respond with the retrieved trip ID
        res.status(200).json({ tripId });
    } catch (error: any) {
        // Handle errors while fetching trip ID
        res.status(500).json({ message: 'Error fetching trip ID', error: error.message });
    }
};