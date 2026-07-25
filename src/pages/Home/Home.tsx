import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            {/* ==========================================================
                Search
            ========================================================== */}

            <section className={styles.searchSection}>

                <div className={styles.container}>

                    <div className={styles.searchBar}>
                        🔍 Search products, brands, flower...
                    </div>

                </div>

            </section>

            {/* ==========================================================
                Categories
            ========================================================== */}

            <section className={styles.categories}>

                <div className={styles.container}>

                    <div className={styles.categoryScroller}>

                        <Link to="/catalog?category=flower">
                            🌿 Flower
                        </Link>

                        <Link to="/catalog?category=vapes">
                            💨 Vapes
                        </Link>

                        <Link to="/catalog?category=thca">
                            🧪 THCA
                        </Link>

                        <Link to="/catalog?category=kratom">
                            🌱 Kratom
                        </Link>

                        <Link to="/catalog?category=glass">
                            💎 Glass
                        </Link>

                        <Link to="/catalog?category=cbd">
                            🍃 CBD
                        </Link>

                        <Link to="/catalog?category=edibles">
                            🍬 Edibles
                        </Link>

                    </div>

                </div>

            </section>

            {/* ==========================================================
                Weekly Promotion
            ========================================================== */}

            <section className={styles.promo}>

                <div className={styles.container}>

                    <div className={styles.promoCard}>

                        <span className={styles.promoBadge}>
                            New Arrival
                        </span>

                        <h2>
                            Premium THCA Flower
                        </h2>

                        <p>
                            Explore our newest collection of premium flower,
                            vapes, edibles and accessories.
                        </p>

                        <Link
                            to="/catalog"
                            className={styles.primaryButton}
                        >
                            Shop Now
                        </Link>

                    </div>

                </div>

            </section>

            {/* ==========================================================
                Featured Products
            ========================================================== */}

            <section className={styles.featured}>

                <div className={styles.container}>

                    <div className={styles.sectionHeader}>

                        <h2>
                            Featured Products
                        </h2>

                        <Link to="/catalog">
                            View All →
                        </Link>

                    </div>

                    <div className={styles.productGrid}>

                        {/* Product Cards */}

                    </div>

                </div>

            </section>

            {/* ==========================================================
                Shop by Brand
            ========================================================== */}

            <section className={styles.brands}>

                <div className={styles.container}>

                    <div className={styles.sectionHeader}>

                        <h2>
                            Shop by Brand
                        </h2>

                        <Link to="/brands">
                            Browse All →
                        </Link>

                    </div>

                    <div className={styles.brandScroller}>

                        {/* Brand Logos */}

                    </div>

                </div>

            </section>

            {/* ==========================================================
                Why Shop Here
            ========================================================== */}

            <section className={styles.whyUs}>

                <div className={styles.container}>

                    <div className={styles.features}>

                        <div className={styles.feature}>
                            ✅ Premium Brands
                        </div>

                        <div className={styles.feature}>
                            🧪 Lab Tested Products
                        </div>

                        <div className={styles.feature}>
                            🚗 Local Pickup
                        </div>

                        <div className={styles.feature}>
                            ⭐ Friendly Staff
                        </div>

                    </div>

                </div>

            </section>

            {/* ==========================================================
                Visit Our Store
            ========================================================== */}

            <section
                id="location"
                className={styles.location}
            >

                <div className={styles.container}>

                    <div className={styles.sectionHeader}>

                        <h2>
                            Visit Smoke Headquarters
                        </h2>

                    </div>

                    <div className={styles.locationContent}>

                        <div>

                            <h3>
                                Plano, Texas
                            </h3>

                            <p>
                                Premium cannabis alternatives,
                                glass, kratom, CBD, accessories
                                and more.
                            </p>

                            <p>
                                Monday - Saturday
                                <br />
                                10:00 AM - 9:00 PM
                            </p>

                        </div>

                        <div className={styles.mapPlaceholder}>

                            Google Map

                        </div>

                    </div>

                </div>

            </section>

            {/* ==========================================================
                Footer CTA
            ========================================================== */}

            <section className={styles.cta}>

                <div className={styles.container}>

                    <h2>
                        Ready to Shop?
                    </h2>

                    <p>
                        Browse hundreds of premium products from the industry's
                        most trusted brands.
                    </p>

                    <Link
                        to="/catalog"
                        className={styles.primaryButton}
                    >
                        Browse Catalog
                    </Link>

                </div>

            </section>

        </>
    );
}