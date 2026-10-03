import styles from "./Home.module.css";
import DesktopNavigation from "../../components/Header/DesktopNavigation";

export default function Home() {

    const disabledLink = (
        event: React.MouseEvent<HTMLAnchorElement>
    ) => {
        event.preventDefault();
    };

    return (
        <div className={styles.homePage}>

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

                        <a href="/" onClick={disabledLink}>
                            🌿 Flower
                        </a>

                        <a href="/" onClick={disabledLink}>
                            💨 Vapes
                        </a>

                        <a href="/" onClick={disabledLink}>
                            🧪 THCA
                        </a>

                        <a href="/" onClick={disabledLink}>
                            🌱 Kratom
                        </a>

                        <a href="/" onClick={disabledLink}>
                            💎 Glass
                        </a>

                        <a href="/" onClick={disabledLink}>
                            🍃 CBD
                        </a>

                        <a href="/" onClick={disabledLink}>
                            🍬 Edibles
                        </a>

                    </div>

                </div>

            </section>


            {/* ==========================================================
                Desktop Hero
            ========================================================== */}

            <section className={styles.heroSection}>

                <div className={styles.container}>

                    <div className={styles.heroLayout}>

                        {/* ==================================================
                            Desktop Navigation
                        ================================================== */}

                        <aside className={styles.desktopSidebar}>

                            <DesktopNavigation />

                        </aside>


                        {/* ==================================================
                            Promo Area
                        ================================================== */}

                        <div className={styles.heroPromo}>

                            {/* ==================================================
                                Main Promotion
                            ================================================== */}

                            <div className={styles.promoCard}>

                                <span className={styles.promoBadge}>
                                    New Arrival
                                </span>

                                <h2>
                                    Premium THCA Flower
                                </h2>

                                <p>
                                    Explore our newest collection of premium
                                    flower, vapes, edibles and accessories.
                                </p>

                                <a
                                    href="/"
                                    onClick={disabledLink}
                                    className={styles.primaryButton}
                                >
                                    Shop Now
                                </a>

                            </div>


                            {/* ==================================================
                                Secondary Promotions
                            ================================================== */}

                            <div className={styles.promoGrid}>

                                {/* New Vapes */}

                                <div className={styles.smallPromoCard}>

                                    <span className={styles.smallPromoBadge}>
                                        New
                                    </span>

                                    <h3>
                                        New Vape Collection
                                    </h3>

                                    <p>
                                        Discover the latest flavors and
                                        devices from popular brands.
                                    </p>

                                    <a
                                        href="/"
                                        onClick={disabledLink}
                                        className={styles.secondaryButton}
                                    >
                                        Explore Vapes
                                    </a>

                                </div>


                                {/* Premium Glass */}

                                <div className={styles.smallPromoCard}>

                                    <span className={styles.smallPromoBadge}>
                                        Featured
                                    </span>

                                    <h3>
                                        Premium Glass
                                    </h3>

                                    <p>
                                        Hand-selected glass pieces,
                                        water pipes and accessories.
                                    </p>

                                    <a
                                        href="/"
                                        onClick={disabledLink}
                                        className={styles.secondaryButton}
                                    >
                                        Shop Glass
                                    </a>

                                </div>


                                {/* CBD */}

                                <div className={styles.smallPromoCard}>

                                    <span className={styles.smallPromoBadge}>
                                        Popular
                                    </span>

                                    <h3>
                                        CBD Favorites
                                    </h3>

                                    <p>
                                        Browse popular oils, gummies,
                                        topicals and more.
                                    </p>

                                    <a
                                        href="/"
                                        onClick={disabledLink}
                                        className={styles.secondaryButton}
                                    >
                                        Shop CBD
                                    </a>

                                </div>


                                {/* Local Pickup */}

                                <div className={styles.smallPromoCard}>

                                    <span className={styles.smallPromoBadge}>
                                        Shop Local
                                    </span>

                                    <h3>
                                        Local Pickup
                                    </h3>

                                    <p>
                                        Order online and pick up your
                                        favorites in Plano.
                                    </p>

                                    <a
                                        href="/"
                                        onClick={disabledLink}
                                        className={styles.secondaryButton}
                                    >
                                        Visit Store
                                    </a>

                                </div>

                            </div>

                        </div>

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

                        <a
                            href="/"
                            onClick={disabledLink}
                        >
                            View All →
                        </a>

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

                        <a
                            href="/"
                            onClick={disabledLink}
                        >
                            Browse All →
                        </a>

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
                                <strong>
                                    2001 Coit Rd #168
                                    <br />
                                    Plano, TX 75075
                                </strong>
                            </p>

                            <p>
                                Monday - Saturday
                                <br />
                                10:00 AM - 9:00 PM
                            </p>

                        </div>

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=2001%20Coit%20Rd%20%23168%2C%20Plano%2C%20TX%2075075"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.mapContainer}
                            aria-label="Open Smoke Headquarters in Google Maps"
                        >

                            <iframe
                                title="Smoke Headquarters location"
                                src="https://www.google.com/maps?q=2001%20Coit%20Rd%20%23168%2C%20Plano%2C%20TX%2075075&output=embed"
                                className={styles.map}
                                loading="lazy"
                                allowFullScreen
                            />

                            <div className={styles.mapOverlay}>
                                Open in Google Maps ↗
                            </div>

                        </a>

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
                        Browse hundreds of premium products from the
                        industry's most trusted brands.
                    </p>

                    <a
                        href="/"
                        onClick={disabledLink}
                        className={styles.primaryButton}
                    >
                        Browse Catalog
                    </a>

                </div>

            </section>

        </div>
    );
}