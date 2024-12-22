// bearbeitet von Marcia Perez Heilig

import styles from "@/css/form.module.css";
import { FormProps } from "@/types/FormProps";

export default function FormGroup({ formgroup }: { formgroup: FormProps }) {
    if (formgroup.type === "text") {
        return (
            <div className={styles.formGroup}>
                <label htmlFor={formgroup.name}>{formgroup.label}</label>
                <input type={formgroup.type} id={formgroup.name} name={formgroup.name} placeholder={formgroup.placeholder}/>
            </div>
        );

    } else if (formgroup.type === "date") {
        return (
            <div className={styles.formGroup}>
                <label htmlFor={formgroup.name}>{formgroup.label}</label>
                <input type={formgroup.type} id={formgroup.name} name={formgroup.name} />
            </div>
        );

    } else {
        return (
            <div className={styles.formGroup}>
                <label htmlFor={formgroup.name}>{formgroup.label}</label>
                <select id={formgroup.name} name={formgroup.name} defaultValue="placeholder">
                    <option key="-1" value="placeholder" disabled>{formgroup.placeholder}</option>
                    {formgroup.options?.map((option, index) => {
                        return <option key={index} value={option}>{option}</option>
                    })}
                </select>
            </div>
        );
    }
}