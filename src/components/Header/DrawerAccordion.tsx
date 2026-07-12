import { useState, ReactNode } from "react";

import {
    HiChevronDown,
    HiChevronRight
} from "react-icons/hi";

import styles from "./DrawerAccordion.module.css";

interface DrawerAccordionProps {

    title: string;

    children: ReactNode;

    defaultOpen?: boolean;

}

export default function DrawerAccordion({

    title,

    children,

    defaultOpen = false

}: DrawerAccordionProps) {

    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (

        <div className={styles.accordion}>

            <button
                className={styles.accordionHeader}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >

                <span>
                    {title}
                </span>

                {isOpen
                    ? <HiChevronDown />
                    : <HiChevronRight />
                }

            </button>

            {isOpen && (

                <div className={styles.accordionContent}>

                    {children}

                </div>

            )}

        </div>

    );

}