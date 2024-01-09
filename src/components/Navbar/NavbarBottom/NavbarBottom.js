import React from "react";
import styles from "./NavbarBottom.module.css";
import walletIcon from "../../../assets/wallet.png";

const NavbarBottom = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.walletIcon} src={walletIcon} alt="wallet icon" />
      <div className={styles.container}>
        <p className={styles.creditsTitle}>Available credits</p>
        <p className={styles.creditValue}>222.10</p>
      </div>
    </div>
  );
};

export default NavbarBottom;
