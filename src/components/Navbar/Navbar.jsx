import React, { useState } from 'react';
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>Portfolio</a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? "/nav/menuclose.png" : "/nav/menu.png"}
          alt="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
