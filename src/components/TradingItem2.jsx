import React from 'react'
import styles from '../styles/TradingItem2.module.css'
const TradingItem2 = ({itemImg, name, price}) => {
  return (
    <>
    <div className={styles.MainDiv}>
            <div className={styles.itemDiv}>
                <img src={itemImg} alt="" />
            </div>
            <div className={styles.itemInfo}>
                <p className={styles.itemName}>{name}</p>
                <p className={styles.itemPrice}>{price}</p>
            </div>
        </div>
    </>
  )
}

export default TradingItem2
