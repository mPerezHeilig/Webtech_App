// bearbeitet von Marcia Perez Heilig

import Journey from '../models/Journey';
import { ITrip } from '../models/Journey';
import mongoose from 'mongoose';

export const updateTrip = async (
    id: string, 
    name: string, 
    departure_date: string, 
    return_date: string, 
    dest_country: string, 
    tourguide: string): Promise<ITrip | null> => {
    // Convert string ID to ObjectId and update the trip in the database
    const result = await Journey.findByIdAndUpdate(
        new mongoose.Types.ObjectId(id),
        { $set: { name, departure_date, return_date, dest_country, tourguide } },
        { new: true } // Return the updated document
    );
    return result;
};