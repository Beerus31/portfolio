import React from 'react';
import styles from "./profile.module.css";

export const Profile = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Hi, I'm Jocas Isaac Marion Faller</h1>
        <p className={styles.description}></p>
        <p>
          I'm a photo graphic designer, programmer, and video editor. I graduated from STI Muñoz Edsa, batch 2023,
          and earned Latin honors with a thesis running for Best Thesis during 2023.
        </p>
        <a href="#contact" className={styles.contactBtn} onClick={scrollToContact}>
          Contact Me
        </a>
      </div>
      <img className={styles.me3} src="/profilepic/me3.jpeg" alt="Profile picture" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
