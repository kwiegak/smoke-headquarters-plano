import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
    HiOutlineX,
    HiChevronDown,
    HiChevronRight,
    HiOutlineFire,
    HiOutlineSparkles,
    HiOutlineCube,
    HiOutlineGift,
    HiOutlineInformationCircle,
    HiOutlinePhone
} from "react-icons/hi";

import styles from "./Header.module.css";

interface NavigationDrawerProps {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavigationDrawer({
    menuOpen,
    setMenuOpen
}: NavigationDrawerProps) {

    const [flowerOpen, setFlowerOpen] = useState(false);

    const [vapeOpen, setVapeOpen] = useState(false);

    const onClose = () => {
        setMenuOpen(false);
    };

    return (

        <aside
            className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""
                }`}
        >

            <div className={styles.drawerHeader}>

                <button
                    className={styles.iconButton}
                    onClick={onClose}
                >
                    <HiOutlineX />
                </button>

            </div>

            <div className={styles.drawerHero}>

                <img
                    src={logo}
                    alt="Smoke Headquarters"
                    className={styles.drawerLogo}
                />

                <h2>
                    Smoke Headquarters
                </h2>

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
                    onClick={onClose}
                >
                    <HiOutlineFire />
                    Deals
                </Link>

                {/* THCA */}

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
                        : <HiChevronRight />
                    }

                </button>

                {flowerOpen && (

                    <div className={styles.subMenu}>

                        <Link
                            to="/catalog?category=flower"
                            onClick={onClose}
                        >
                            Indoor Flower
                        </Link>

                        <Link
                            to="/catalog?category=pre-rolls"
                            onClick={onClose}
                        >
                            Pre Rolls
                        </Link>

                        <Link
                            to="/catalog?category=moon-rocks"
                            onClick={onClose}
                        >
                            Moon Rocks
                        </Link>

                    </div>

                )}

                {/* Vapes */}

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
                        : <HiChevronRight />
                    }

                </button>

                {vapeOpen && (

                    <div className={styles.subMenu}>

                        <Link
                            to="/catalog?brand=fryd"
                            onClick={onClose}
                        >
                            Fryd
                        </Link>

                        <Link
                            to="/catalog?brand=cakes"
                            onClick={onClose}
                        >
                            Cakes
                        </Link>

                        <Link
                            to="/catalog?brand=muha"
                            onClick={onClose}
                        >
                            Muha Meds
                        </Link>

                    </div>

                )}

                <Link
                    to="/catalog?category=glass"
                    onClick={onClose}
                >
                    <HiOutlineCube />
                    Glass
                </Link>

                <Link
                    to="/catalog?category=gummies"
                    onClick={onClose}
                >
                    🍬 Gummies
                </Link>

                <Link
                    to="/catalog?category=kratom"
                    onClick={onClose}
                >
                    🌿 Kratom
                </Link>

                <Link
                    to="/catalog?category=cbd"
                    onClick={onClose}
                >
                    CBD
                </Link>

                <Link
                    to="/catalog?category=accessories"
                    onClick={onClose}
                >
                    <HiOutlineGift />
                    Accessories
                </Link>

                <hr />

                <Link
                    to="/brands"
                    onClick={onClose}
                >
                    Brands
                </Link>

                <Link
                    to="/about"
                    onClick={onClose}
                >
                    <HiOutlineInformationCircle />
                    About
                </Link>

                <Link
                    to="/contact"
                    onClick={onClose}
                >
                    <HiOutlinePhone />
                    Contact
                </Link>

            </nav>

        </aside>

    );

}