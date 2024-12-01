// bearbeitet von Marcia Perez Heilig

import { Request, Response } from 'express';
import { getAllCountries, getAllTourguides } from "../services/loadformdata_services";

export const listCountries = (res: Response) => {
    try {
        // Fetch the list of countries to choose from
        const country_options = getAllCountries();
        // Respond with the country options in JSON format
        res.status(200).json(country_options);
    } catch (error: any) {
        // Respond with an error if fetching countries fails
        res.status(500).json({
            error: "An error occurred while fetching countries",
            details: error.message,
        });
    }
    };

export const listTourguides = (res: Response) => {
    try {
        // Fetch the list of tourguides to choose from
        const tourguide_options = getAllTourguides();
        // Respond with the tourguides options in JSON format
        res.status(200).json(tourguide_options);
    } catch (error: any) {
        // Respond with an error if fetching tourguides fails
        res.status(500).json({
            error: "An error occurred while fetching tourguides",
            details: error.message,
        });
    }
    };