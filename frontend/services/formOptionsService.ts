// bearbeitet von Marcia Perez Heilig

import axios from "axios";

export async function fetchCountryOptions() {
    try {
        const response = await axios.get('http://localhost:8084/api/countries');
        return response.data;

    } catch(error) {
        console.error("ERR0R: Country options could not be loaded.", error);
    }
}

export async function fetchTourguideOptions() {
    try {
        const response = await axios.get('http://localhost:8084/api/tourguides');
        return response.data;

    } catch(error) {
        console.error("ERR0R: Tourguide options could not be loaded.", error);
    }
}