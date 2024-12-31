// bearbeitet von Marcia Perez Heilig

import styles from "@/css/page.module.css";
import list_styles from "@/css/tripcollection.module.css";

export default function Home() {
  return (
    <div id={styles.main}>
      <h1>Travel Planner</h1>
      <div className={styles.displaycard}>
        <h2>Top Destinations</h2>
        <div className={list_styles.listItem}>
          <h3>🇹🇭 Thailand</h3>
        </div>
        <div className={list_styles.listItem}>
          <h3>🇪🇸 Spain</h3>
        </div>
        <div className={list_styles.listItem}>
          <h3>🇳🇴 Norway</h3>
        </div>
      </div>
    </div>
  );
};