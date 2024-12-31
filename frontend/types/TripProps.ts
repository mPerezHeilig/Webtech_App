// bearbeitet von Marcia Perez Heilig

export interface TripProps {
    id: number;
    name: string;
    departure_date: string;
    return_date: string;
    dest_country: string;
    tourguide: string;
}

export interface TripByIdProps {
    params: {
        id: number;
    };
}

export interface TripCollectionProps {
    trips: Array<TripProps>;
}