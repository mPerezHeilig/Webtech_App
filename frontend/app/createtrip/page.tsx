// bearbeitet von Marcia Perez Heilig

import styles from "@/css/page.module.css";
import { fetchCountryOptions, fetchTourguideOptions } from "@/services/formOptionsService";
import Form from "@/components/Form/Form";
import RouteProtector from "@/components/RouteProtector";

export default async function CreateTrip() {
    // Fetch country options from service
    const countryOptions = await fetchCountryOptions();
    // Fetch tourguide options from service
    const tourguideOptions = await fetchTourguideOptions();

    return (
        <RouteProtector>
            <div id={styles.main}>
                <h1>Travel Planner</h1>
                <div className={styles.displaycard}>
                    <h2>Create New Trip</h2>
                    {/* Form component with dynamically loaded options */}
                    <Form countryOptions={countryOptions || []} tourguideOptions={tourguideOptions || []} />
                </div>
            </div>
        </RouteProtector>
  );
};