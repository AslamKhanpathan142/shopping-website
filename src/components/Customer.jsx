import React from 'react'
import styles from '../styles/Customer.module.css';
import customer from '/customer.png'

const Customer = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.content}>
        <p className={styles.para1}>What people said</p>
        <p className={styles.para2}>Love the way they handle the order.</p>
        <p className={styles.para3}>Very professional and friendly at the same time. They packed the order on schedule and the detail of their wrapping is top notch. One of my best experience for buying online items. Surely will come back for another purchase.</p>
        <p className={styles.para4}>Samantha William</p>
        <p className={styles.para5}>Fashion Enthusiast</p>
      </div>
      <div className={styles.imgDiv}>
        <img src={customer} alt="" />
      </div>
    </div>
  )
}

export default Customer
