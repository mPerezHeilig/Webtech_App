// bearbeitet von Marcia Perez Heilig

import express, {Express} from 'express';
import router from './routes/trip_routes';

const app: Express = express(); // initialize Express application

app.use(express.json()); // parse JSON bodies
app.use("/", router); // Use router for root path
app.use(express.static('public')); // serve static files from the public directory


export default app;