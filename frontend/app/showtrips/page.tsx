// bearbeitet von Marcia Perez Heilig

import styles from "@/css/page.module.css";
import DisplayCard from "@/components/DisplayCard";

export default function Home() {
  return (
    <div id={styles.main}>
      <h1>Travel Planner</h1>
      <DisplayCard title="Trip Collection" />
    </div>
  );
};