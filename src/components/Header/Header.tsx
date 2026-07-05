import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <Link to="/" className={styles.brand}>
          <img
            src={logo}
            alt="Smoke Headquarters Plano"
            className={styles.logo}
          />
        </Link>

        <nav className={styles.nav}>
          <a href="#products">Products</a>
          <a href="#brands">Brands</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </header>
  );
}