// bearbeitet von Marcia Perez Heilig

import express, { Request,Response } from 'express';
import { listTrips, createTrip, editTrip, deleteTrip } from '../controllers/trip_controller';

const router = express.Router();

// load all trips
router.get('/api/showtrips', (request: Request, response: Response) => {
    listTrips(response);
});

// add new trip
router.post('/api/addtrip', (request: Request, response: Response) => {
    createTrip(request, response);
});

// edit a trip
router.put('/api/edittrip/:id', (req: Request, res: Response) => {
    // Add controller logic here
});

// delete a trip
router.delete('/api/deletetrip/:id', (req: Request, res: Response) => {
    // Add controller logic here
});

// delete all trips
router.delete('/api/deletetrips', (req: Request, res: Response) => {
    // Add controller logic here
});

export default router;