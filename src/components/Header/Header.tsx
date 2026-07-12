import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu,HiOutlineLocationMarker } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import NavigationDrawer from "./NavigationDrawer";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      {/* Overlay */}

      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Header */}

      <header className={styles.header}>

        <div className={styles.headerCard}>

          {/* Menu */}

          <button
            className={styles.iconButton}
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
          >
            <HiOutlineMenu />
          </button>

          {/* Logo */}

          <Link
            to="/"
            className={styles.logoContainer}
          >

            <img
              src={logo}
              alt="Smoke Headquarters"
              className={styles.logo}
            />

            <div className={styles.storeInfo}>

              <span className={styles.storeName}>
                Smoke Headquarters
              </span>

              <span className={styles.storeLocation}>
                <HiOutlineLocationMarker />
                Plano • 15–20 min
              </span>

            </div>

          </Link>

          {/* Cart */}

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

      {/* Navigation Drawer */}

      <NavigationDrawer
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

    </>
  );

}