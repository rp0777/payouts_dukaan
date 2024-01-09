import React from "react";
import styles from "./PageCard.module.css";

const PageCard = ({ img, title }) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt={`${title} icon`} />
      <p className={styles.pageCardTitle}>{title}</p>
    </div>
  );
};

export default PageCard;
