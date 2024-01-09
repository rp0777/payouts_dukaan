import React from "react";
import { pages } from "../../../../data/pageData";
import styles from "./PagesList.module.css";
import PageCard from "./PageCard/PageCard";

const PagesList = () => {
  return (
    <div className={styles.wrapper}>
      {pages.map((page) => {
        return <PageCard key={page.id} img={page.img} title={page.title} />;
      })}
    </div>
  );
};

export default PagesList;
