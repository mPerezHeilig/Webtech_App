// bearbeitet von Marcia Perez Heilig

import styles from "@/css/displaycard.module.css"
import ListItem from "@/components/ListItem";

export default function DisplayCard({ title }: { title: string }) {
    return (
        <div className={styles.displaycard}>
            <h2>{ title }</h2>
        </div>
    );
}