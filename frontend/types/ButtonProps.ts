// bearbeitet von Marcia Perez Heilig

/* Reusable button component.
Renders a button with optional styles and functionality. */
export interface ButtonProps {
    text: string;
    className?: string;
    type: "button" | "submit" | "reset"
    onClick?: () => void
  }