import { type Dispatch, type SetStateAction } from "react";
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

    const disabledLink = (
        event: React.MouseEvent<HTMLAnchorElement>
    ) => {
        event.preventDefault();
        onClose();
    };

    return (
        <nav className={styles.nav}>

            {mockNavigationItems.map((item) => {

                {/* ==================================================
                    Items with children
                ================================================== */}

                if (item.children) {

                    return (
                        <DrawerAccordion
                            key={item.title}
                            title={item.title}
                        >

                            {item.children.map((child) => (

                                <a
                                    key={child.to}
                                    href="/"
                                    onClick={disabledLink}
                                >
                                    {child.label}
                                </a>

                            ))}

                        </DrawerAccordion>
                    );
                }


                {/* ==================================================
                    Standard Navigation Items
                ================================================== */}

                return (
                    <a
                        key={item.to}
                        href="/"
                        onClick={disabledLink}
                        className={styles.navLink}
                    >

                        <span>
                            {item.title}
                        </span>

                        <HiChevronRight />

                    </a>
                );
            })}

        </nav>
    );
}