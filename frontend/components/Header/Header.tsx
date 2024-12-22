import styles from '@/css/header.module.css';
import Link from 'next/link';
import NavBar from '@/components/Header/Navbar';

export default function Header() {
    return (
        <header id={styles.header}>
            <Link href="/" id={styles.home}><h3>HOME</h3></Link>
            <NavBar />
        </header>
    )
}