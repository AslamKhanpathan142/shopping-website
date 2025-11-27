import React from 'react'
import styles from '../styles/ImageSide.module.css'
import img2 from '/sideImage1.png'
const ImageSide = ({img2, contant}) => {
  return (
    <>
        <div className={styles.sideImage}>
            <p>{contant}</p>
            <img src={img2} alt="" />
        </div>
    </>
  )
}

export default ImageSide;


