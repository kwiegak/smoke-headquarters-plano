import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.png";

export default function Footer() {

    const disabledLink = (
        event: React.MouseEvent<HTMLAnchorElement>
    ) => {
        event.preventDefault();
    };

    return (
        <footer className={styles.footer}>

            <div className={styles.footerInner}>

                {/* ==================================================
                    Brand
                ================================================== */}

                <div className={styles.brandSection}>

                    <Link
                        to="/"
                        className={styles.logoContainer}
                    >
                        <img
                            src={logo}
                            alt="Smoke Headquarters"
                            className={styles.logo}
                        />
                    </Link>

                </div>


                {/* ==================================================
                    Benefits + Quick Links
                ================================================== */}

                <div className={styles.linkColumns}>

                    <div className={styles.column}>

                        <h3>Benefits</h3>

                        <a href="/" onClick={disabledLink}>
                            Wholesale
                        </a>

                        <a href="/" onClick={disabledLink}>
                            Price Match
                        </a>

                        <a href="/" onClick={disabledLink}>
                            Rewards
                        </a>

                    </div>


                    <div className={styles.column}>

                        <h3>Quick Links</h3>

                        <a href="/" onClick={disabledLink}>
                            About Nicotine
                        </a>

                        <a href="/" onClick={disabledLink}>
                            Battery Warning
                        </a>

                        <a href="/" onClick={disabledLink}>
                            Terms & Conditions
                        </a>

                        <a href="/" onClick={disabledLink}>
                            Sitemap
                        </a>

                        <a href="/" onClick={disabledLink}>
                            Blog
                        </a>

                        <a href="/" onClick={disabledLink}>
                            PMTA/Shipping Updates
                        </a>

                        <a href="/" onClick={disabledLink}>
                            FAQs
                        </a>

                    </div>

                </div>


                {/* ==================================================
                    Returns & Support
                ================================================== */}

                <div className={styles.supportSection}>

                    <h3>
                        Returns & Support
                    </h3>

                    <a href="/" onClick={disabledLink}>
                        Customer Support
                    </a>

                </div>


                {/* ==================================================
                    Top Categories
                ================================================== */}

                <div className={styles.categoriesSection}>

                    <h3>
                        Top Categories
                    </h3>

                    <div className={styles.categoryColumns}>

                        <div className={styles.column}>

                            <a href="/" onClick={disabledLink}>
                                Geek Bar Disposable Vapes
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Raz Disposable Vapes
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Lost Mary Disposable Vapes
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Smart Disposable Vapes
                            </a>

                            <a href="/" onClick={disabledLink}>
                                5% Nic Disposable Vapes
                            </a>

                            <a href="/" onClick={disabledLink}>
                                0% Nic Disposable Vapes
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Nicotine Pouches
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Bulk E-Liquid
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Premium E-Liquids
                            </a>

                        </div>


                        <div className={styles.column}>

                            <a href="/" onClick={disabledLink}>
                                Pod Kits
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Starter Kits
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Mods
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Coils and Pods
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Tanks
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Batteries
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Cartridge Battery Devices
                            </a>

                            <a href="/" onClick={disabledLink}>
                                E-Liquid Juice
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Tobacco-Free Nicotine E-Liquids
                            </a>

                        </div>

                    </div>

                </div>


                {/* ==================================================
                    Products
                ================================================== */}

                <div className={styles.productsSection}>

                    <h3>
                        Top Products
                    </h3>

                    <div className={styles.productsColumns}>

                        <div className={styles.column}>

                            <a href="/" onClick={disabledLink}>
                                Geek Bar Disposable Vapes
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Raz Disposable Vapes
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Lost Mary Disposable Vapes
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Smart Disposable Vapes
                            </a>

                            <a href="/" onClick={disabledLink}>
                                5% Nic Disposable Vapes
                            </a>

                            <a href="/" onClick={disabledLink}>
                                0% Nic Disposable Vapes
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Nicotine Pouches
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Bulk E-Liquid
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Premium E-Liquids
                            </a>

                        </div>


                        <div className={styles.column}>

                            <a href="/" onClick={disabledLink}>
                                Pod Kits
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Starter Kits
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Mods
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Coils and Pods
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Tanks
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Batteries
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Cartridge Battery Devices
                            </a>

                            <a href="/" onClick={disabledLink}>
                                E-Liquid Juice
                            </a>

                            <a href="/" onClick={disabledLink}>
                                Tobacco-Free Nicotine E-Liquids
                            </a>

                        </div>

                    </div>

                </div>


                {/* ==================================================
                    Copyright
                ================================================== */}

                <div className={styles.bottomSection}>

                    <p>
                        © {new Date().getFullYear()} Smoke Headquarters.
                        All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}   