import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineMenu,
  HiOutlineX
} from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import NavigationDrawer from "./NavigationDrawer";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>

        <div className={styles.headerCard}>

          <div className={styles.leftSection}>

            <button
              className={styles.iconButton}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
            >
              {menuOpen
                ? <HiOutlineX />
                : <HiOutlineMenu />
              }
            </button>

            <Link
              to="/"
              className={styles.logoContainer}
            >
              <img
                onClick={() => setMenuOpen(false)}
                src={logo}
                alt="Smoke Headquarters"
                className={styles.logo}
              />
            </Link>

          </div>

          <button
            className={styles.cartButton}
            aria-label="Shopping Cart"
          >
            <FiShoppingCart />

            <span className={styles.cartCount}>
              0
            </span>
          </button>

        </div>

      </header>

      <NavigationDrawer
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
}