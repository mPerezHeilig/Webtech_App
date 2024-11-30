// bearbeitet von Marcia Perez Heilig

import { Request, Response } from 'express';
import { getAllTrips, getTripById } from '../services/showtrip_services';
import { addNewTrip } from '../services/createtrip_services';
import { deleteTripById, deleteAllTrips } from '../services/deletetrip_services';
import { saveTripId, fetchTripId, updateTrip } from '../services/edittrip_services';

 
export const listTrips = (res: Response) => {
    try {
        const all_trips = getAllTrips();
        res.status(200).json(all_trips);
    } catch (error: any) {
        res.status(500).json({
            error: "An error occurred while fetching trips",
            details: error.message,
        });
    }
    };

    export const loadTrip = (req: Request, res: Response) => {
        const tripId = parseInt(req.params.id); // Get trip ID from URL
        try {
            const tripById = getTripById(tripId);
            if (!tripById) {
                res.status(404).json({ error: `Trip with ID ${tripId} not found` });
            } else {
                res.status(200).json(tripById);
            }
        } catch (error: any) {
            res.status(500).json({
                error: 'An error occurred while fetching trip by ID',
                details: error.message,
            });
        }
    };

  export const createTrip = (req: Request, res: Response) => {
    try {
        const { dest_country, departure_date, return_date, tourguide } = req.body;

        // Validate user input
        if (!dest_country || !departure_date || !return_date || !tourguide) {
            throw new Error("All fields are required: dest_country, departure_date, return_date, tourguide");
        }

        // Pass data to service function to create the trip
        const newTrip = addNewTrip({ dest_country, departure_date, return_date, tourguide });

        res.status(201).json({
            message: "Trip created successfully",
            trip: newTrip, // Return the created trip
        });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const editTrip = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { departure_date, return_date, dest_country, tourguide } = req.body;

    try {
        const updatedTrip = updateTrip(id, departure_date, return_date, dest_country, tourguide);

        if (!updatedTrip) {
            return res.status(404).json({ message: `Trip with ID ${id} not found` });
        }

        res.status(200).json({ message: 'Trip updated successfully', trip: updatedTrip });
    } catch (error: any) {
        res.status(500).json({
            message: 'An error occurred while updating the trip',
            error: error.message,
        });
    }
};

export const removeTrip = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    if (deleteTripById(id)) {
        res.status(200).json({ message: `Trip with ID ${id} deleted successfully` });
    } else {
        res.status(404).json({ message: `Trip with ID ${id} not found` });
    }
}

export const clearTrips = (req: Request, res: Response) => {
    try {
        deleteAllTrips(); // Call the service to delete all trips
        res.status(200).json({ message: 'All trips deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ message: 'Error occurred while deleting all trips', error: error.message });
    }
}

export const postTripId = (req: Request, res: Response) => {
    try {
        const { tripId } = req.body;
        if (!tripId) {
            return res.status(400).json({ message: 'Invalid trip ID' });
        }

        saveTripId(tripId);
        res.status(200).json({ message: 'Trip ID saved successfully' });
    } catch (error: any) {
        res.status(500).json({ message: 'Error saving trip ID', error: error.message });
    }
};

export const loadTripId = (req: Request, res: Response) => {
    try {
        const tripId = fetchTripId();
        if (tripId === null) {
            return res.status(404).json({ message: 'No trip ID found' });
        }

        res.status(200).json({ tripId });
    } catch (error: any) {
        res.status(500).json({ message: 'Error fetching trip ID', error: error.message });
    }
};