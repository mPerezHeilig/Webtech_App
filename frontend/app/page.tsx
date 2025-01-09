// bearbeitet von Marcia Perez Heilig

import styles from "@/css/page.module.css";
import col_styles from "@/css/tripcollection.module.css";
import Teaser from "@/components/Teaser";

export default function Home() {
  return (
    <div id={styles.main}>
      <h1>Travel Planner</h1>
      <div className={styles.displaycard}>
        <h2>Top Destinations</h2>
        <div className={col_styles.tripCollection}>
        <Teaser 
          teaser_data = {{
            title: "🇹🇭 Thailand",
            img_url: "http://localhost:8084/img/teaser_thailand.webp",
          }}
        />

        <Teaser 
          teaser_data = {{
            title: "🇪🇸 Spain",
            img_url: "http://localhost:8084/img/teaser_spain.webp",
          }}
        />

        <Teaser 
          teaser_data = {{
            title: "🇳🇴 Norway",
            img_url: "http://localhost:8084/img/teaser_norway.webp",
          }}
        />
        </div>
      </div>
    </div>
  );
};