import styles from './Header.module.css';
import logo from '../assets/igniteLogo.svg';

export function Header() {
    return(
        <header className={styles.header}>
            <img src={logo} alt="Logo" />
            <h1>StraightUp!</h1>
        </header>
    );
};
