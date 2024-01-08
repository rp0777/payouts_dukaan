import React from "react";

// Importing styles
import styles from "./Payouts.module.css";

// Import components
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Dashboard from "../../components/Dashboard/Dashboard";

const Payouts = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.scrollable}>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default Payouts;
