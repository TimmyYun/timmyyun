import React from "react";
import { Link } from "react-router-dom";
import styles from "../App.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.mainpage}>
        <Link to={"/"}>
          <h1>Timur Unaspekov</h1>
        </Link>
      </div>
      <div className={styles.nav}>
        <nav>
          <ul className="flex">
            <li className={styles.item}>
              <a href="#about" title="About">
                <span>About</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="#skills" title="Skills">
                <span>Skills</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="#experience" title="Experience">
                <span>Experience</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="#education" title="Education">
                <span>Education</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="#portfolio" title="Portfolio">
                <span>Portfolio</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="#references" title="References">
                <span>References</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="#contact" title="Contact">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
