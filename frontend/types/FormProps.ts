// bearbeitet von Marcia Perez Heilig

export interface FormProps {
    label: string;
    type?: string;
    name: string;
    placeholder?: string;
    options?: Array<string>;
    value?: string;
}

export interface FormGroupProps {
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