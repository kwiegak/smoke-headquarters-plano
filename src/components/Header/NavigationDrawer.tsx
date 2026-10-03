import { type Dispatch, type SetStateAction } from "react";
import NavigationMenu from "./NavigationMenu";
import styles from "./NavigationDrawer.module.css";

interface NavigationDrawerProps {
    menuOpen: boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function NavigationDrawer({
    menuOpen,
    setMenuOpen
}: NavigationDrawerProps) {

    const onClose = () => {
        setMenuOpen(false);
    };

    return (
        <aside
            className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
            aria-hidden={!menuOpen}
        >

            {menuOpen && (
                <div
                    className={styles.overlay}
                    onClick={onClose}
                />
            )}

            <div className={styles.drawerCard}>

                <NavigationMenu
                    setMenuOpen={setMenuOpen}
                />

            </div>

        </aside>
    );
}