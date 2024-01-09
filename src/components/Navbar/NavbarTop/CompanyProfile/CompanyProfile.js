import React from "react";
import styles from "./CompanyProfile.module.css";
import companyIcon from "../../../../assets/company-icon.png";
import downArrow from "../../../../assets/Chevron Down.svg";

const CompanyProfile = () => {
  return (
    <div className={styles.wrapper}>
      <img src={companyIcon} alt="company icon" />
      <div className={styles.container}>
        <p className={styles.companyName}>Nishyan</p>
        <a href="#0" className={styles.storeLink}>
          Visit store
        </a>
      </div>
      <img src={downArrow} alt="down arrow" />
    </div>
  );
};

export default CompanyProfile;
