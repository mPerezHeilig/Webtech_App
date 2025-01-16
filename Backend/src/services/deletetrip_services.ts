// bearbeitet von Marcia Perez Heilig

import Journey from '../models/Journey';
import mongoose from 'mongoose';

export const deleteTripById = async (id: string): Promise<boolean> => {
    // Convert string ID to ObjectId
    const result = await Journey.deleteOne({ _id: new mongoose.Types.ObjectId(id) });

    return result.deletedCount > 0;  // returns true if a document was deleted
};

export const deleteAllTrips = async (): Promise<void> => {
    // Delete all documents from the 'journeys' collection
    await Journey.deleteMany({});
}