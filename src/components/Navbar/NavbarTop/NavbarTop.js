import React from "react";
import styles from "./NavbarTop.module.css";
import CompanyProfile from "./CompanyProfile/CompanyProfile";
import PagesList from "./PagesList/PagesList";

const NavbarTop = () => {
  return (
    <div className={styles.wrapper}>
      <CompanyProfile />
      <PagesList />
    </div>
  );
};

export default NavbarTop;
