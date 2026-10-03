import { useEffect, useState } from "react";
import styles from "./AgeVerification.module.css";

const AGE_VERIFIED_KEY = "smokeHeadquartersAgeVerified";

export default function AgeVerification() {

    const [showModal, setShowModal] = useState(false);
    const [denied, setDenied] = useState(false);

    useEffect(() => {

        const ageVerified = localStorage.getItem(
            AGE_VERIFIED_KEY
        );

        if (ageVerified !== "true") {
            setShowModal(true);
        }

    }, []);

    const handleYes = () => {

        localStorage.setItem(
            AGE_VERIFIED_KEY,
            "true"
        );

        setShowModal(false);

    };

    const handleNo = () => {

        setDenied(true);

    };

    if (!showModal) {
        return null;
    }

    return (
        <div className={styles.overlay}>

            <div
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="age-verification-title"
            >

                {!denied ? (
                    <>
                        <div className={styles.logoMark}>
                            21+
                        </div>

                        <h2 id="age-verification-title">
                            Are you 21 or older?
                        </h2>

                        <p>
                            You must be at least 21 years old
                            to enter Smoke Headquarters.
                        </p>

                        <div className={styles.buttons}>

                            <button
                                type="button"
                                className={styles.yesButton}
                                onClick={handleYes}
                            >
                                Yes
                            </button>

                            <button
                                type="button"
                                className={styles.noButton}
                                onClick={handleNo}
                            >
                                No
                            </button>

                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.logoMark}>
                            21+
                        </div>

                        <h2>
                            Sorry
                        </h2>

                        <p>
                            You must be 21 or older to
                            enter Smoke Headquarters.
                        </p>

                    </>
                )}

            </div>

        </div>
    );
}