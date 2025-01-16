// bearbeitet von Marcia Perez Heilig

import { ObjectId, Document, Schema, model } from 'mongoose';

export interface ITrip extends Document{
    _id: ObjectId;
    name: string;
    dest_country: string;
    departure_date: Date;
    return_date: Date;
    tourguide: string;
}

const tripSchema = new Schema<ITrip>({
    name: { type: String, required: true },
    dest_country: { type: String, required: true },
    departure_date: { type: Date, required: true },
    return_date: { type: Date, required: true },
    tourguide: { type: String, required: true },
});

// Validate return date is after departure date
tripSchema.pre('save', function(next) {
    if (this.return_date <= this.departure_date) {
        next(new Error('Return date must be later than departure date.'));
    } else {
        // Proceed with saving the document if the validation is successful
        next();
    }
});

const Journey = model<ITrip>("Journey", tripSchema);
export default Journey;