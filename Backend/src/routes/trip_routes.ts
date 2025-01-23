// bearbeitet von Marcia Perez Heilig

import express, { Request,Response } from 'express';
import { listTrips, loadTrip, createTrip, editTrip, removeTrip, clearTrips } from '../controllers/trip_controller';
import { registerUser, signinUser } from '../controllers/auth_controller';
import { listCountries, listTourguides } from '../controllers/form_controller';
import { authenticateToken } from '../middlewares/auth_middleware';


// Initialize Express Router
const router = express.Router();

// Load all trips
router.get('/api/trips', authenticateToken, (req: Request, res: Response) => {
    listTrips(res);
});

// Load explicit trip
router.get('/api/trips/:id', authenticateToken, (req: Request, res: Response) => {
    loadTrip(req, res);
})

// Add new trip
router.post('/api/trips', authenticateToken, (req: Request, res: Response) => {
    createTrip(req, res);
});

// Edit a trip selected by id
router.put('/api/trips/:id', authenticateToken, (req: Request, res: Response) => {
    editTrip(req, res);
});

// Delete a trip selected by id
router.delete('/api/trips/:id', authenticateToken, (req: Request, res: Response) => {
    removeTrip(req, res);
});

// Delete all trips
router.delete('/api/trips', authenticateToken, (req: Request, res: Response) => {
    clearTrips(req, res);
});

// Route to get form country options
router.get('/api/countries', (req: Request, res: Response) => {
    listCountries(res);
});

// Route to get form tourguide options
router.get('/api/tourguides', (req: Request, res: Response) => {
    listTourguides(res);
});

// User registration
router.post('/api/register', (req: Request, res: Response) => {
    registerUser(req, res);
});

// User sign in
router.post('/api/signin', (req: Request, res: Response) => {
    signinUser(req, res);
});

// Token validation
router.get("/api/auth/validate", authenticateToken);

export default router;