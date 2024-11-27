// bearbeitet von Marcia Perez Heilig

import { Request, Response } from 'express';
import { getAllTrips } from '../services/showtrip_services';
import { addNewTrip } from '../services/createtrip_services';

export const listTrips = (res: Response) => {
    try {
        const all_trips = getAllTrips();
    
        if (all_trips.length > 0) {
            res.status(200).json(all_trips);
        } else {
            res.status(404).json({ message: "No trips found" });
        }
      } catch (error: any) {
            res.status(500).json({ error: "An error occurred while fetching trips", details: error.message });
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

export const editTrip = () => {}

export const deleteTrip = () => {}