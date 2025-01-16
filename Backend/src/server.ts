// bearbeitet von Marcia Perez Heilig

import dotenv from 'dotenv';
import app from './app';
import mongoose from 'mongoose';

dotenv.config(); // load environment variables

const port = process.env.PORT; // set port from environment variables
const mongo_uri = process.env.MONGO_URI; // set connection string from environment variables

// start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

// establish database connection
mongoose.connect(mongo_uri || "").then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.log('Database connection failed', error);
});