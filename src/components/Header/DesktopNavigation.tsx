import NavigationMenu from "./NavigationMenu";
import styles from "./NavigationDrawer.module.css";

export default function DesktopNavigation() {

    return (
        <aside className={styles.desktopNavigation}>

            <div className={styles.desktopNavigationHeader}>
                <span>
                    Shop
                </span>
            </div>

            <NavigationMenu />

        </aside>
    );
}