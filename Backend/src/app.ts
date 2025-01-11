// bearbeitet von Marcia Perez Heilig

import express, {Express} from 'express';
import cors from 'cors'; 
import router from './routes/trip_routes';
import connectDatabase from './data/database';

const app: Express = express(); // initialize Express application

// Establish database connection
//connectDatabase();

app.use(cors({ origin: 'http://localhost:3000' })); // Enable CORS for frontend
app.use(express.json()); // Parse JSON bodies

// Serve static files from the 'public' directory
// This should ideally come before your router if you are facing issues with static file access
app.use(express.static('public'));

// Use router for handling API routes
app.use("/", router);

export default app;