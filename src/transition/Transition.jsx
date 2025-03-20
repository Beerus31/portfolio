import React, { useEffect, useState } from "react";
import styles from "./transition.module.css";

export const Transition = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("fadeImage");
            if (element) {
                const rect = element.getBoundingClientRect();
                setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="fadeImage" className={`${styles.imageContainer} ${!isVisible ? styles.hidden : ""}`}>
            <img src="/aboutfold/channel orange.png" alt="Transition Image" />
        </div>
    );
};
