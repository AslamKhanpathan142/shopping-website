import React from "react";
import styles from "../styles/Browse.module.css"
const Browse = () => {
  return (
    <div className={styles.img1}>
      <p className={styles.heading}>Casual Inspirations</p>
      <p className={styles.para}>
        Our favorite combinations for casual outfit that can inspire you to apply on your daily activity.
      </p>
      <button>BROWSE INPIRATIONS</button>
    </div>
  );
};

export default Browse;
