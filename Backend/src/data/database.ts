// bearbeitet von Marcia Perez Heilig

import mongoose from 'mongoose';

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI || "").then(() => {
        console.log('Connected to database');
    }).catch((error) => {
        console.log('Database connection failed', error);
    });
};

export default connectDatabase;