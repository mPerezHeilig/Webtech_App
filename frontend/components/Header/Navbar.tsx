// bearbeitet von Marcia Perez Heilig

import styles from '@/css/header.module.css';
import Link from 'next/link';

export default function NavBar() {
    return (
        <div id={styles.navBar}>
            <Link href="/showtrips" className={styles.navLink}>Show Trips</Link>
            <Link href="/createtrip" className={styles.navLink}>Create Trips</Link>
        </div>
    )
}