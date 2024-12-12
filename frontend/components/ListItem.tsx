// bearbeitet von Marcia Perez Heilig

import styles from "@/css/listitem.module.css"
import { Trip } from "@/types/Trip"

export default function ListItem({ trip }: { trip: Trip }) {
    return (
        <div className={styles.listItem}>
            <h3>{trip.name}</h3>
            <p>Departure Date: {trip.departure_date}</p>
            <p>Return Date: {trip.return_date}</p>
            <p>Country: {trip.dest_country}</p>
            <p>Tourguide: {trip.tourguide}</p>
        </div>
    );
}