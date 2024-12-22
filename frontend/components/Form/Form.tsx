// bearbeitet von Marcia Perez Heilig

import styles from "@/css/form.module.css";
import btn_styles from "@/css/button.module.css";
import FormGroup from "@/components/Form/FormGroup";
import Button from "@/components/Button";
import { fetchCountryOptions, fetchTourguideOptions } from "@/services/formOptionsService";
import Link from "next/link";

export default async function Form() {
    return (
            <form className={styles.tripForm}>
            
                <FormGroup formgroup={{label: "Name:", type: "text", name: "name", placeholder: "Name your Trip"}}/>

                <FormGroup formgroup={{label: "Departure Date:", type: "date", name: "departure_date"}} />

                <FormGroup formgroup={{label: "Return Date:", type: "date", name: "return_date"}} />

                <FormGroup formgroup={{label: "Country:", name: "country", placeholder: "Choose Country", options: await fetchCountryOptions()}} />
            
                <FormGroup formgroup={{label: "Tourguide:", name: "tourguide", placeholder: "Choose Tourguide", options: await fetchTourguideOptions()}} />
                
                <div>
                    <Button button={{text: "Add Trip", className: btn_styles.alarmButton, type: "submit"}} />
                    <Link href="/showtrips"><Button button={{text: "Show Trip Collection", type: "button"}} /></Link>
                </div>

            </form>
    );
}