import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiChevronDown,
  HiChevronRight
} from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";

import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [flowerOpen, setFlowerOpen] = useState(false);
  const [vapeOpen, setVapeOpen] = useState(false);

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

        <div className={styles.headerInner}>

          <button
            className={styles.iconButton}
            onClick={() => setMenuOpen(true)}
          >
            <HiOutlineMenu />
          </button>

          <Link
            to="/"
            className={styles.logoContainer}
          >
            <img
              src={logo}
              alt="Smoke Headquarters Plano"
              className={styles.logo}
            />
          </Link>

          <button className={styles.cartButton}>
            <FiShoppingCart />
            <span className={styles.cartBadge}>0</span>
          </button>

        </div>

      </header>

      {/* Drawer */}

      <aside
        className={`${styles.drawer}
                ${menuOpen ? styles.drawerOpen : ""}`}
      >

        <div className={styles.drawerHeader}>

          <button
            className={styles.iconButton}
            onClick={() => setMenuOpen(false)}
          >
            <HiOutlineX />
          </button>

          <img
            src={logo}
            className={styles.drawerLogo}
            alt="Smoke HQ"
          />

        </div>

        <nav className={styles.nav}>


          <Link
            to="/deals"
            onClick={() => setMenuOpen(false)}
          >
            🔥 Deals
          </Link>

          {/* THCA */}

          <button
            className={styles.expandButton}
            onClick={() =>
              setFlowerOpen(!flowerOpen)
            }
          >

            THCA Flower

            {flowerOpen ?
              <HiChevronDown /> :
              <HiChevronRight />}

          </button>

          {flowerOpen && (

            <div className={styles.subMenu}>

              <Link to="/catalog?category=flower">
                Indoor Flower
              </Link>

              <Link to="/catalog?category=pre-rolls">
                Pre Rolls
              </Link>

              <Link to="/catalog?category=moon-rocks">
                Moon Rocks
              </Link>

            </div>

          )}

          {/* Vapes */}

          <button
            className={styles.expandButton}
            onClick={() =>
              setVapeOpen(!vapeOpen)
            }
          >

            Disposable Vapes

            {vapeOpen ?
              <HiChevronDown /> :
              <HiChevronRight />}

          </button>

          {vapeOpen && (

            <div className={styles.subMenu}>

              <Link to="/catalog?brand=fryd">
                Fryd
              </Link>

              <Link to="/catalog?brand=cakes">
                Cakes
              </Link>

              <Link to="/catalog?brand=muha">
                Muha Meds
              </Link>

            </div>

          )}

          <Link to="/catalog?category=kratom">
            Kratom
          </Link>

          <Link to="/catalog?category=glass">
            Glass
          </Link>

          <Link to="/catalog?category=gummies">
            Gummies
          </Link>

          <Link to="/catalog?category=cbd">
            CBD
          </Link>

          <Link to="/catalog?category=accessories">
            Accessories
          </Link>

          <hr />

          <Link to="/brands">
            Brands
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </nav>

      </aside>

    </>
  );

}