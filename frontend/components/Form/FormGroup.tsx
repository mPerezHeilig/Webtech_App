// bearbeitet von Marcia Perez Heilig

import styles from "@/css/form.module.css";
import { FormGroupProps } from "@/types/FormProps";
  
export default function FormGroup({ formgroup, value, onChange, error }: FormGroupProps & { error?: string }) {
  return (
      <div className={styles.formGroup}>
          <label htmlFor={formgroup.name}>{formgroup.label}</label>

          {formgroup.type === "text" || formgroup.type === "date" ? (
              <input 
                  type={formgroup.type} 
                  id={formgroup.name} 
                  name={formgroup.name} 
                  placeholder={formgroup.placeholder}
                  value={value}
                  onChange={onChange}
              />
          ) : formgroup.options ? (
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
          ) : null}

          {error && <p className={styles.errorText}>{error}</p>}
      </div>
  );
}