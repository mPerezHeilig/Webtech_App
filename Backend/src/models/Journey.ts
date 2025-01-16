// bearbeitet von Marcia Perez Heilig

import { ObjectId, Document, Schema, model } from 'mongoose';

export interface ITrip extends Document{
    _id: ObjectId;
    name: string;
    dest_country: string;
    departure_date: string;
    return_date: string;
    tourguide: string;
}

const tripSchema = new Schema<ITrip>({
    name: { type: String, required: true },
    dest_country: { type: String, required: true },
    departure_date: { type: String, required: true },
    return_date: { type: String, required: true },
    tourguide: { type: String, required: true },
});

const Journey = model<ITrip>("Journey", tripSchema);
export default Journey;