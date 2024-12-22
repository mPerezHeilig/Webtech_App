// bearbeitet von Marcia Perez Heilig

import styles from "@/css/page.module.css";
import Form from "@/components/Form/Form";

export default function CreateTrip() {
  return (
    <div id={styles.main}>
      <h1>Travel Planner</h1>
      <div className={styles.displaycard}>
        <h2>Create New Trip</h2>
        <Form />
      </div>
    </div>
  );
};