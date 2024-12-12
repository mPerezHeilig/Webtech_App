// bearbeitet von Marcia Perez Heilig

export interface ButtonProps {
    text: string;
    className?: string;
    type: "button" | "submit" | "reset"
    onClick?: () => void;
    disabled?: boolean;
  }