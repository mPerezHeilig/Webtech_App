// bearbeitet von Marcia Perez Heilig

import { Request, Response } from 'express';
import { getAllCountries, getAllTourguides } from "../services/loadformdata_services";

export const listCountries = (res: Response) => {
    try {
        const country_options = getAllCountries();
        res.status(200).json(country_options);
    } catch (error: any) {
        res.status(500).json({
            error: "An error occurred while fetching countries",
            details: error.message,
        });
    }
    };

export const listTourguides = (res: Response) => {
    try {
        const tourguide_options = getAllTourguides();
        res.status(200).json(tourguide_options);
    } catch (error: any) {
        res.status(500).json({
            error: "An error occurred while fetching tourguides",
            details: error.message,
        });
    }
    };