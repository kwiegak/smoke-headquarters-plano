import styles from "./Home.module.css";
import hero from "../../assets/images/home-banner.png";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            {/* ==========================================================
                Hero
            ========================================================== */}

            <section
                className={styles.hero}
                style={{ backgroundImage: `url(${hero})` }}
            >
                <div className={styles.heroOverlay}>
                    <div className={styles.heroContent}>

                        <span className={styles.heroBadge}>
                            Premium Smoke Boutique
                        </span>

                        <h1>
                            Smoke Headquarters
                        </h1>

                        <h2>
                            Curated Premium Cannabis Alternatives
                        </h2>

                        <p>
                            THCA Flower • Vapes • Kratom • Glass • CBD
                        </p>

                        <p className={styles.heroDescription}>
                            Discover premium products from the industry's
                            most trusted brands.
                        </p>

                        <div className={styles.heroButtons}>

                            <Link
                                to="/catalog"
                                className={styles.primaryButton}
                            >
                                Shop Collection
                            </Link>

                            <a
                                href="#location"
                                className={styles.secondaryButton}
                            >
                                Visit Store
                            </a>

                        </div>

                    </div>
                </div>
            </section>

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
                            Flower
                        </Link>

                        <Link to="/catalog?category=vapes">
                            Vapes
                        </Link>

                        <Link to="/catalog?category=kratom">
                            Kratom
                        </Link>

                        <Link to="/catalog?category=glass">
                            Glass
                        </Link>

                        <Link to="/catalog?category=cbd">
                            CBD
                        </Link>

                        <Link to="/catalog?category=edibles">
                            Edibles
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

                    {/* Product Grid */}

                </div>

            </section>

            {/* ==========================================================
                Featured Brands
            ========================================================== */}

            <section className={styles.brands}>

                <div className={styles.container}>

                    <div className={styles.sectionHeader}>

                        <h2>
                            Shop Top Brands
                        </h2>

                        <Link to="/brands">
                            Browse Brands →
                        </Link>

                    </div>

                    <div className={styles.brandScroller}>

                        {/* Brand logos */}

                    </div>

                </div>

            </section>

            {/* ==========================================================
                Why Smoke Headquarters
            ========================================================== */}

            <section className={styles.whyUs}>

                <div className={styles.container}>

                    <div className={styles.sectionHeader}>

                        <h2>
                            Why Smoke Headquarters
                        </h2>

                    </div>

                    {/* Feature cards */}

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

                    {/* Address */}

                    {/* Store Hours */}

                    {/* Google Map */}

                </div>

            </section>

            {/* ==========================================================
                CTA
            ========================================================== */}

            <section className={styles.cta}>

                <div className={styles.container}>

                    <h2>
                        Experience the Difference
                    </h2>

                    <p>
                        Premium products. Trusted brands.
                        Exceptional service.
                    </p>

                    <Link
                        to="/catalog"
                        className={styles.primaryButton}
                    >
                        Shop Collection
                    </Link>

                </div>

            </section>

        </>
    );
}