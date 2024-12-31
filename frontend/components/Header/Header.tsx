// bearbeitet von Marcia Perez Heilig

import styles from '@/css/header.module.css';
import Link from 'next/link';
import NavBar from '@/components/Header/Navbar';

// Header component including a title link to the home page and the navigation bar
export default function Header() {
    return (
        <header id={styles.header}>
            <Link href="/" id={styles.home}><h3>TRAVEL PLANNER</h3></Link>
            <NavBar />
        </header>
    )
}