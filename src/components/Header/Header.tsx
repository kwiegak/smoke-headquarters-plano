import { useState } from "react";
import { Link } from "react-router-dom";

import {
  HiOutlineMenu,
  HiOutlineX,
  HiChevronDown,
  HiChevronRight,
  HiOutlineLocationMarker,
  HiOutlineFire,
  HiOutlineSparkles,
  HiOutlineCube,
  HiOutlineGift,
  HiOutlineInformationCircle,
  HiOutlinePhone
} from "react-icons/hi";

import {
  FiShoppingCart
} from "react-icons/fi";

import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [flowerOpen, setFlowerOpen] = useState(false);
  const [vapeOpen, setVapeOpen] = useState(false);

  return (
    <>

      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
        />
      )}

      <header className={styles.header}>

        <div className={styles.headerCard}>

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

          <button className={styles.cartButton}>

            <FiShoppingCart />

            <span className={styles.cartCount}>
              0
            </span>

          </button>

        </div>

      </header>

      <aside
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
      >

        <div className={styles.drawerHeader}>

          <button
            className={styles.iconButton}
            onClick={() => setMenuOpen(false)}
          >
            <HiOutlineX />
          </button>

        </div>

        <div className={styles.drawerHero}>

          <img
            src={logo}
            alt="Smoke HQ"
            className={styles.drawerLogo}
          />

          <h2>Smoke Headquarters</h2>

          <p>
            Premium THCA • Vapes • Glass
          </p>

          <span>
            🚚 Free delivery over $75
          </span>

        </div>

        <nav className={styles.nav}>

          <Link
            to="/deals"
            onClick={() => setMenuOpen(false)}
          >
            <HiOutlineFire />
            Deals
          </Link>

          <button
            className={styles.expandButton}
            onClick={() => setFlowerOpen(!flowerOpen)}
          >

            <span>

              <HiOutlineSparkles />

              THCA Flower

            </span>

            {flowerOpen
              ? <HiChevronDown />
              : <HiChevronRight />}

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

          <button
            className={styles.expandButton}
            onClick={() => setVapeOpen(!vapeOpen)}
          >

            <span>

              💨

              Disposable Vapes

            </span>

            {vapeOpen
              ? <HiChevronDown />
              : <HiChevronRight />}

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

          <Link to="/catalog?category=glass">
            <HiOutlineCube />
            Glass
          </Link>

          <Link to="/catalog?category=gummies">
            🍬 Gummies
          </Link>

          <Link to="/catalog?category=kratom">
            🌿 Kratom
          </Link>

          <Link to="/catalog?category=cbd">
            CBD
          </Link>

          <Link to="/catalog?category=accessories">
            <HiOutlineGift />
            Accessories
          </Link>

          <hr />

          <Link to="/brands">
            Brands
          </Link>

          <Link to="/about">
            <HiOutlineInformationCircle />
            About
          </Link>

          <Link to="/contact">
            <HiOutlinePhone />
            Contact
          </Link>

        </nav>

      </aside>

    </>
  );

}