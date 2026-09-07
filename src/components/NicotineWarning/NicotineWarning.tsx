import styles from './NicotineWarning.module.css';

function NicotineWarning() {
    return (
        <div className={styles.nicotineWarning}>
            <p>
                Warning: this product contains nicotine. Nicotine is an addictive chemical.
            </p>

            <p>
                All vape sales are restricted to the following states and other areas that may not be listed here: Maine, Arizona, Oregon, Utah, Vermont, California, New York, New Jersey, Virginia, Hawaii, and Puerto Rico.
            </p>
        </div>
    );
}

export default NicotineWarning;