import React from "react";
import styles from "../styles/HomeImage.module.css";
const HomeImage = () => {
  return (
    <>
      <div className={styles.img1}>
        <p className={styles.heading}>Color of Summer Outfit</p>
        <p className={styles.para}>100+ Collections for your outfit inspirations in this summer</p>
        <button>VIEW COLLECTIONS</button>
      </div>
    </>
  );
};

export default HomeImage;
