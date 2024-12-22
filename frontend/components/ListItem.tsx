// bearbeitet von Marcia Perez Heilig

import styles from "@/css/tripcollection.module.css"
import { Trip } from "@/types/TripProps"

export default function ListItem({ trip_info }: { trip_info: Trip }) {
    return (
        <div className={styles.listItem}>
            <h3>{trip_info.name}</h3>
            <p>Departure Date: {trip_info.departure_date}</p>
            <p>Return Date: {trip_info.return_date}</p>
            <p>Country: {trip_info.dest_country}</p>
            <p>Tourguide: {trip_info.tourguide}</p>
        </div>
    );
}