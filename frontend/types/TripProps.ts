// bearbeitet von Marcia Perez Heilig

export interface TripProps {
    id: string;
    name: string;
    departure_date: string;
    return_date: string;
    dest_country: string;
    tourguide: string;
}

export interface TripByIdProps {
    params: {
        id: string;
    };
}

export interface TripCollectionProps {
    trips: Array<TripProps>;
}