// bearbeitet von Marcia Perez Heilig

import { TeaserProps } from "@/types/TeaserProps";
import Image from "next/image";
import styles from "@/css/teaser.module.css";

export default function Teaser({ teaser_data }: { teaser_data: TeaserProps }) {
    return (
        <div className={styles.teaser}>
          <h3>{teaser_data.title}</h3>
          <Image src={teaser_data.img_url} alt={teaser_data.title} width={300} height={200}/>
        </div>
    )
}