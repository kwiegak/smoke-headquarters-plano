import { type Dispatch, type SetStateAction } from "react";
import { Link } from "react-router-dom";

import {
    HiOutlineX,
    HiChevronRight
} from "react-icons/hi";

import DrawerAccordion from "./DrawerAccordion";

import styles from "./NavigationDrawer.module.css";

interface NavigationDrawerProps {
    menuOpen: boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

interface NavigationItem {
    title: string;
    to?: string;
    children?: {
        label: string;
        to: string;
    }[];
}

const navigationItems: NavigationItem[] = [
    {
        title: "Shop All Products",
        to: "/catalog"
    },
    {
        title: "THCA Flower",
        children: [
            {
                label: "Indoor Flower",
                to: "/catalog?category=flower"
            },
            {
                label: "Pre Rolls",
                to: "/catalog?category=pre-rolls"
            },
            {
                label: "Moon Rocks",
                to: "/catalog?category=moon-rocks"
            }
        ]
    },
    {
        title: "Disposable Vapes",
        children: [
            {
                label: "Fryd",
                to: "/catalog?brand=fryd"
            },
            {
                label: "Cakes",
                to: "/catalog?brand=cakes"
            },
            {
                label: "Muha Meds",
                to: "/catalog?brand=muha"
            }
        ]
    },
    {
        title: "Gummies",
        to: "/catalog?category=gummies"
    },
    {
        title: "Kratom",
        to: "/catalog?category=kratom"
    },
    {
        title: "Glass",
        to: "/catalog?category=glass"
    },
    {
        title: "CBD",
        to: "/catalog?category=cbd"
    },
    {
        title: "Deals",
        to: "/deals"
    },
    {
        title: "About",
        to: "/about"
    },
    {
        title: "Contact",
        to: "/contact"
    }
];

export default function NavigationDrawer({
    menuOpen,
    setMenuOpen
}: NavigationDrawerProps) {

    const onClose = () => {
        setMenuOpen(false);
    };

    return (
        <>

            {menuOpen && (
                <div
                    className={styles.overlay}
                    onClick={onClose}
                />
            )}

            <aside
                className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
                aria-hidden={!menuOpen}
            >

                <div className={styles.drawerCard}>

                    <button
                        className={styles.closeButton}
                        onClick={onClose}
                        aria-label="Close navigation"
                    >
                        <HiOutlineX />
                    </button>

                    <nav className={styles.nav}>

                        {navigationItems.map((item) => {

                            if (item.children) {

                                return (
                                    <DrawerAccordion
                                        key={item.title}
                                        title={item.title}
                                    >

                                        {item.children.map((child) => (

                                            <Link
                                                key={child.to}
                                                to={child.to}
                                                onClick={onClose}
                                            >
                                                {child.label}
                                            </Link>

                                        ))}

                                    </DrawerAccordion>
                                );

                            }

                            return (
                                <Link
                                    key={item.to}
                                    to={item.to!}
                                    onClick={onClose}
                                    className={styles.navLink}
                                >

                                    <span>{item.title}</span>

                                    <HiChevronRight />

                                </Link>
                            );

                        })}

                    </nav>

                </div>

            </aside>

        </>
    );
}