// bearbeitet von Marcia Perez Heilig

import styles from "@/css/tripcollection.module.css";
import ListItem from "@/components/TripCollection/ListItem";
import { TripCollectionProps } from "@/types/TripProps";

export default function TripCollection({
    trips,
    onDeleteTrip,
    onEditTrip,
}: TripCollectionProps & {
    onDeleteTrip: (id: string) => void;
    onEditTrip: (id: string) => void;
}) {
    return (
        <div className={styles.tripCollection}>
            {trips.map((trip) => (
                <ListItem
                    key={trip.id}
                    trip_info={trip}
                    onDeleteTrip={() => onDeleteTrip(trip.id)}  
                    onEditTrip={() => onEditTrip(trip.id)}
                />
            ))}
        </div>
    );
}