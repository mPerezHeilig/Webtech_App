// bearbeitet von Marcia Perez Heilig

import { Document, Schema, model } from 'mongoose';

export interface ITrip extends Document{
    _id: number;
    name: string;
    dest_country: string;
    departure_date: string;
    return_date: string;
    tourguide: string;
}

const tripSchema = new Schema<ITrip>({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    dest_country: { type: String, required: true },
    departure_date: { type: String, required: true },
    return_date: { type: String, required: true },
    tourguide: { type: String, required: true },
}, { _id: false }); // Prevent Mongoose from auto-creating _id

const Journey = model<ITrip>("Journey", tripSchema);
export default Journey;