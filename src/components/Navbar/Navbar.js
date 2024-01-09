import React from "react";
import styles from "./Navbar.module.css";
import NavbarTop from "./NavbarTop/NavbarTop";
import NavbarBottom from "./NavbarBottom/NavbarBottom";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <NavbarTop />
      <NavbarBottom />
    </div>
  );
};

export default Navbar;
