import React from "react";
import styles from "../styles/HomeImage.module.css";
import home1 from '/home1.png'
const HomeImage = () => {
  return (
    <>
      <div className={styles.img1}>
        <div className={styles.insideText}>
        <p className={styles.heading}>Color of Summer Outfit</p>
        <p className={styles.para}>100+ Collections for your outfit inspirations in this summer</p>
        <button>VIEW COLLECTIONS</button>
        </div>
        <img src={home1} alt="" />
      </div>
    </>
  );
};

export default HomeImage;
