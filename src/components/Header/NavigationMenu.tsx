import { type Dispatch, type SetStateAction } from "react";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import DrawerAccordion from "./DrawerAccordion";
import styles from "./NavigationDrawer.module.css";
import { mockNavigationItems } from "../../data/mockNavigation";

interface NavigationMenuProps {
    setMenuOpen?: Dispatch<SetStateAction<boolean>>;
}

export default function NavigationMenu({
    setMenuOpen
}: NavigationMenuProps) {

    const onClose = () => {
        setMenuOpen?.(false);
    };

    return (
        <nav className={styles.nav}>

            {mockNavigationItems.map((item) => {

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
                        <span>
                            {item.title}
                        </span>

                        <HiChevronRight />
                    </Link>
                );
            })}

        </nav>
    );
}