// bearbeitet von Marcia Perez Heilig

import styles from "@/css/tripcollection.module.css";
import ListItem from "@/components/ListItem";
import { Trip } from "@/types/TripProps";
import { fetchTrips } from "@/services/showTripsService";

export default async function TripCollection() {
    const trips: Array<Trip> = await fetchTrips();
    return (
        <div className={styles.tripCollection}>
            {trips.map((trip: Trip) => (
                <ListItem 
                    key={trip.id} 
                    trip_info={{
                        id: trip.id,
                        name: trip.name,
                        departure_date: trip.departure_date,
                        return_date: trip.return_date,
                        dest_country: trip.dest_country,
                        tourguide: trip.tourguide,
                    }} 
                />
            ))}
        </div>
    );
}