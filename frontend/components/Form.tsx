// bearbeitet von Marcia Perez Heilig

import styles from "@/css/form.module.css";
import FormGroup from "@/components/FormGroup";
import Button from "@/components/Button";

export default function Form() {
    return (
            <form className={styles.tripForm}>
            
                <FormGroup formgroup={{label: "Name:", type: "text", name: "name", placeholder: "Name your Trip"}}/>

                <FormGroup formgroup={{label: "Departure Date:", type: "date", name: "departure_date"}} />

                <FormGroup formgroup={{label: "Return Date:", type: "date", name: "return_date"}} />

                <FormGroup formgroup={{label: "Country:", name: "country", placeholder: "Choose Country"}} />
            
                <FormGroup formgroup={{label: "Tourguide", name: "tourguide", placeholder: "Choose Tourguide"}} />

                <Button button={{text: "Add Trip", className: "", type: "submit"}} />

            </form>
    );
}