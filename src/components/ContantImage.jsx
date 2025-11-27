import React from "react";
import styles from '../styles/ContantImage.module.css'

const ContantImage = ({img2, contant}) => {
  return (
    <div className={styles.sideImage}>
      <p>{contant}</p>
      <img src={img2} alt="" />
    </div>
  );
};

export default ContantImage;
