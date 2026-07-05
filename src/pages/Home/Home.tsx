import styles from "./Home.module.css";
import hero from "../../assets/images/home-banner.png";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <section className={styles.hero} style={{ backgroundImage: `url(${hero})` }}>
                <div className={styles.heroOverlay}>
                    <div className={styles.heroContent}>
                        <h1> Plano's Premium Smoke Shop</h1>
                        <h2> THCA • Kratom • Glass • Vapes • CBD</h2>
                        <p>
                            Discover premium flower, disposable vapes,
                            kratom, glass, edibles and accessories from
                            trusted brands. Proudly serving Plano and the
                            surrounding communities.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link to="/catalog" className={styles.primaryButton}>
                                Shop Products
                            </Link>
                            <a href="#location" className={styles.secondaryButton}>
                                Visit Store
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className={styles.categories}>
                <div className={styles.container}>
                    <h2>Shop By Category</h2>
                    <div className={styles.categoryGrid}>
                        <Link to="/catalog?category=flower" className={styles.categoryCard}>
                            <h3>Flower</h3>
                            <p>Premium Indoor THCA Flower</p>
                        </Link>
                        <Link to="/catalog?category=vapes" className={styles.categoryCard}>
                            <h3>Vapes</h3>
                            <p>Disposables & Cartridges</p>
                        </Link>
                        <Link to="/catalog?category=kratom" className={styles.categoryCard}>
                            <h3>Kratom</h3>
                            <p>Powders, Capsules & Extracts</p>
                        </Link>
                        <Link to="/catalog?category=glass" className={styles.categoryCard}>
                            <h3>Glass</h3>
                            <p>Pipes, Rigs & Accessories</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.featured}>
                <div className={styles.container}>
                    <h2>Featured Products</h2>
                    <div className={styles.productGrid}>
                        <Link to="/catalog?category=flower" className={styles.productCard}>
                            <img
                                src="/images/products/flower-1.png"
                                alt="Premium THCA Flower"
                            />
                            <h3>Premium THCA Flower</h3>
                            <span>$39.99</span>
                        </Link>
                        <Link to="/catalog?category=vapes" className={styles.productCard}>
                            <img src="/images/products/vape-1.png" alt="Disposable Vape"/>
                            <h3>Disposable Vape</h3>
                            <span>$24.99</span>
                        </Link>
                        <Link to="/catalog?category=glass" className={styles.productCard}>
                            <img src="/images/products/glass-1.png" alt="Glass Piece"/>
                            <h3>Glass Piece</h3>
                            <span>$49.99</span>
                        </Link>
                        <Link to="/catalog?category=edibles" className={styles.productCard}>
                            <img src="/images/products/gummies-1.png" alt="THCA Gummies"/>
                            <h3>THCA Gummies</h3>
                            <span>$19.99</span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.whyUs}>
                <div className={styles.container}>
                    <h2>Why Shop With Us?</h2>
                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <div className={styles.icon}>🏆</div>
                            <h3>Premium Products</h3>
                            <p>
                                Carefully selected flower,
                                vapes, glass and accessories
                                from brands you know and trust.
                            </p>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.icon}>🔥</div>
                            <h3>Top Brands</h3>
                            <p>
                                We carry the industry's
                                leading manufacturers with
                                new arrivals every week.
                            </p>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.icon}>💬</div>
                            <h3>Friendly Staff</h3>
                            <p>
                                Our knowledgeable team can
                                help you find exactly what
                                you're looking for.
                            </p>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.icon}>📍</div>
                            <h3>Convenient Location</h3>
                            <p>
                                Located in Plano with easy
                                access and plenty of parking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="location"
                className={styles.location}
            >
                <div className={styles.container}>
                    <div className={styles.locationContent}>
                        <div className={styles.locationInfo}>
                            <h2>Visit Smoke HQ</h2>
                            <p> 📍 2001 Coit Rd Suite 168 
                                <br />
                                Plano, TX 75075
                            </p>
                            <h3>Store Hours</h3>
                            <p>
                                Monday - Saturday
                                <br />
                                10:00 AM - 11:00 PM
                            </p>
                            <p>
                                Sunday
                                <br />
                                11:00 AM - 9:00 PM
                            </p>
                            <a
                                href="https://maps.google.com/?q=2001+Coit+Rd+Suite+168+Plano+TX+75075"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.primaryButton}>
                                Get Directions
                            </a>
                        </div>
                        <div className={styles.mapContainer}>
                            <iframe
                                title="Smoke HQ Location"
                                src="https://www.google.com/maps?q=2001+Coit+Rd+Suite+168+Plano+TX+75075&output=embed"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>
                        Ready to Elevate Your Experience?
                    </h2>
                    <p>
                        Browse our complete selection of premium
                        flower, vapes, kratom, glass, CBD,
                        accessories and much more.
                    </p>
                    <Link
                        to="/catalog"
                        className={styles.primaryButton}
                    >
                        Shop Now
                    </Link>
                </div>
            </section>
        </>
    );
}