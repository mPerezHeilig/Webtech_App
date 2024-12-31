// bearbeitet von Marcia Perez Heilig
"use client";

import { ButtonProps } from "@/types/ButtonProps";

export default function Button({ button }: { button: ButtonProps }) {
    if (button.type === "submit") {
        return (
            <button className={button.className}>{button.text}</button>
        )
    } else {
        return (
            <button className={button.className} onClick={button.onClick}>{button.text}</button>
    );
    }
}