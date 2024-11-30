// bearbeitet von Marcia Perez Heilig

import express, { Request,Response } from 'express';
import { listTrips, loadTrip, createTrip, editTrip, removeTrip, clearTrips, postTripId, loadTripId } from '../controllers/trip_controller';

const router = express.Router();

// Load all trips
router.get('/api/trips', (req: Request, res: Response) => {
    listTrips(res);
});

// Load explicit trip
router.get('/api/trips/:id', (req: Request, res: Response) => {
    loadTrip(req, res);
})

// Add new trip
router.post('/api/trips', (req: Request, res: Response) => {
    createTrip(req, res);
});

// Edit a trip selected by id
router.put('/api/trips/:id', (req: Request, res: Response) => {
    editTrip(req, res);
});

// Delete a trip selected by id
router.delete('/api/trips/:id', (req: Request, res: Response) => {
    removeTrip(req, res);
});

// Delete all trips
router.delete('/api/trips', (req: Request, res: Response) => {
    clearTrips(req, res);
});

// Route to save the selected trip ID
router.post('/api/selectedTrip', (req: Request, res: Response) => {
    postTripId(req, res);
});

// Route to get the saved selected trip ID
router.get('/api/selectedTrip', (req: Request, res: Response) => {
    loadTripId(req, res);
});

export default router;