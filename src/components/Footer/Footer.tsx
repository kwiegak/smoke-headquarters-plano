import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.png";

export default function Footer() {
    return (
        <footer className={styles.footer}>

            {/* ==================================================
                Brand
            ================================================== */}

            <div className={styles.brandSection}>
                <Link to="/" className={styles.logoContainer}>
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

                    <Link to="/wholesale">Wholesale</Link>
                    <Link to="/price-match">Price Match</Link>
                    <Link to="/rewards">Rewards</Link>
                </div>


                <div className={styles.column}>
                    <h3>Quick Links</h3>

                    <Link to="/about-nicotine">About Nicotine</Link>
                    <Link to="/battery-warning">Battery Warning</Link>
                    <Link to="/terms">Terms & Conditions</Link>
                    <Link to="/sitemap">Sitemap</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/pmta-shipping-updates">
                        PMTA/Shipping Updates
                    </Link>
                    <Link to="/faqs">FAQs</Link>
                </div>

            </div>


            {/* ==================================================
                Returns & Support
            ================================================== */}

            <div className={styles.supportSection}>

                <h3>Returns & Support</h3>

                <Link to="/customer-support">
                    Customer Support
                </Link>

            </div>


            {/* ==================================================
                Top Categories
            ================================================== */}

            <div className={styles.categoriesSection}>

                <h3>Top Categories</h3>

                <div className={styles.categoryColumns}>

                    <div className={styles.column}>

                        <Link to="/category/geek-bar">
                            Geek Bar Disposable Vapes
                        </Link>

                        <Link to="/category/raz">
                            Raz Disposable Vapes
                        </Link>

                        <Link to="/category/lost-mary">
                            Lost Mary Disposable Vapes
                        </Link>

                        <Link to="/category/smart-disposable">
                            Smart Disposable Vapes
                        </Link>

                        <Link to="/category/5-nic-disposable">
                            5% Nic Disposable Vapes
                        </Link>

                        <Link to="/category/0-nic-disposable">
                            0% Nic Disposable Vapes
                        </Link>

                        <Link to="/category/nicotine-pouches">
                            Nicotine Pouches
                        </Link>

                        <Link to="/category/bulk-e-liquid">
                            Bulk E-Liquid
                        </Link>

                        <Link to="/category/premium-e-liquids">
                            Premium E-Liquids
                        </Link>

                    </div>


                    <div className={styles.column}>

                        <Link to="/category/pod-kits">
                            Pod Kits
                        </Link>

                        <Link to="/category/starter-kits">
                            Starter Kits
                        </Link>

                        <Link to="/category/mods">
                            Mods
                        </Link>

                        <Link to="/category/coils-pods">
                            Coils and Pods
                        </Link>

                        <Link to="/category/tanks">
                            Tanks
                        </Link>

                        <Link to="/category/batteries">
                            Batteries
                        </Link>

                        <Link to="/category/cartridge-battery-devices">
                            Cartridge Battery Devices
                        </Link>

                        <Link to="/category/e-liquid-juice">
                            E-Liquid Juice
                        </Link>

                        <Link to="/category/tobacco-free-nicotine">
                            Tobacco-Free Nicotine E-Liquids
                        </Link>

                    </div>

                </div>

            </div>

            {/* ==================================================
                Products
            ================================================== */}

            <div className={styles.productsSection}>

                <h3>Top Products</h3>

                <div className={styles.productsColumns}>

                    <div className={styles.column}>

                        <Link to="/products/geek-bar">
                            Geek Bar Disposable Vapes
                        </Link>

                        <Link to="/products/raz">
                            Raz Disposable Vapes
                        </Link>

                        <Link to="/products/lost-mary">
                            Lost Mary Disposable Vapes
                        </Link>

                        <Link to="/products/smart-disposable">
                            Smart Disposable Vapes
                        </Link>

                        <Link to="/products/5-nic-disposable">
                            5% Nic Disposable Vapes
                        </Link>

                        <Link to="/productsy/0-nic-disposable">
                            0% Nic Disposable Vapes
                        </Link>

                        <Link to="/products/nicotine-pouches">
                            Nicotine Pouches
                        </Link>

                        <Link to="/products/bulk-e-liquid">
                            Bulk E-Liquid
                        </Link>

                        <Link to="/products/premium-e-liquids">
                            Premium E-Liquids
                        </Link>

                    </div>


                    <div className={styles.column}>

                        <Link to="/products/pod-kits">
                            Pod Kits
                        </Link>

                        <Link to="/products/starter-kits">
                            Starter Kits
                        </Link>

                        <Link to="/products/mods">
                            Mods
                        </Link>

                        <Link to="/products/coils-pods">
                            Coils and Pods
                        </Link>

                        <Link to="/products/tanks">
                            Tanks
                        </Link>

                        <Link to="/products/batteries">
                            Batteries
                        </Link>

                        <Link to="/products/cartridge-battery-devices">
                            Cartridge Battery Devices
                        </Link>

                        <Link to="/products/e-liquid-juice">
                            E-Liquid Juice
                        </Link>

                        <Link to="/products/tobacco-free-nicotine">
                            Tobacco-Free Nicotine E-Liquids
                        </Link>

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

        </footer>
    );
}