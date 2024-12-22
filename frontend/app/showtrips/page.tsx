// bearbeitet von Marcia Perez Heilig

import styles from "@/css/page.module.css";
import btn_styles from "@/css/button.module.css";
import TripCollection from "@/components/TripCollection/TripCollection";
import Button from "@/components/Button";
import Link from "next/link";


export default function ShowTrips() {
  return (
    <div id={styles.main}>
      <h1>Travel Planner</h1>
      <div className={styles.displaycard}>
        <h2>Trip Collection</h2>
        <TripCollection />
        <div>
            <Link href="/createtrip"><Button button={{text: "Create New Trip", type: "button"}} /></Link>
            <Button button={{text: "Delete All Trips", className: btn_styles.alarmButton, type: "button"}} />
        </div>
      </div>
    </div>
  );
};