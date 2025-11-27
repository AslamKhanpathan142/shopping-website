import React from 'react'
import styles from '../styles/Trading.module.css'
import TradingItem from './TradingItem'
import item1 from '/item1.png'
import item2 from '/item2.png'
import item3 from '/item3.png'
import item4 from '/item4.png'
import item5 from '/item5.png'
import item6 from '/item6.png'
import TradingItem2 from './TradingItem2'
import Colors from './Colors'

const Trading = () => {
  return (
    <>
     <nav className={styles.header}>
            <div className={styles.bar}>
                <ul>
                    <li>Trending</li>
                    
                </ul>
            </div>
             <div className={styles.bar2}>
               <ul>
                <li>SHORTS</li>
                <li>HATS</li>
                <li>JACKETS</li>
                <li>SHOES</li>
                <li>T-SHIRT</li>
            </ul>
            </div>
        </nav>

        <div className={styles.TradingItems}>
          <TradingItem 
          itemImg={item1}
          name={'Casual Shoe'}
          price={'$225'}
          />
           <TradingItem 
            itemImg={item2}
          name={'Skateboard Shoe'}
          price={'$125'}
           />
           <TradingItem2 
            itemImg={item3}
          name={'Skateboard Shoe'}
          price={'$125'}
           />
        </div>

         <div className={styles.TradingItems1}>
          <TradingItem2 
            itemImg={item4}
          name={'Skateboard Shoe'}
          price={'$125'}
           />
           <div style={{marginLeft: "55px"}}>
          <TradingItem 
          itemImg={item5}
          name={'Basket Shoe'}
          price={'$125'}
          />
          </div>
           <TradingItem 
            itemImg={item6}
          name={'Sportwear Shoe'}
          price={'$159'}
           />
        </div>


        
        <div className={styles.colorsFlex}>
          <p className={styles.contant}>Explore by Colors</p>
          <Colors />
        </div>
        </>
  )
}

export default Trading
