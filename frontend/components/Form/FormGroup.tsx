// bearbeitet von Marcia Perez Heilig

import styles from "@/css/form.module.css";
import { FormProps } from "@/types/FormProps";

interface FormGroupProps {
    formgroup: {
      label: string;
      type?: string;
      name: string;
      placeholder?: string;
      options?: Array<string>;
    };
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  }
  
  export default function FormGroup({ formgroup, value, onChange }: FormGroupProps) {
    if (formgroup.type === "text" || formgroup.type === "date") {
      return (
        <div className={styles.formGroup}>
          <label htmlFor={formgroup.name}>{formgroup.label}</label>
          <input 
            type={formgroup.type} 
            id={formgroup.name} 
            name={formgroup.name} 
            placeholder={formgroup.placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      );
    }
  
    if (formgroup.options) {
      return (
        <div className={styles.formGroup}>
          <label htmlFor={formgroup.name}>{formgroup.label}</label>
          <select 
            id={formgroup.name} 
            name={formgroup.name} 
            value={value}
            onChange={onChange}
          >
            <option value="placeholder" disabled>{formgroup.placeholder}</option>
            {formgroup.options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
      );
    }
  
    return null; // Handle unsupported types gracefully
  }