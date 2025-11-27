import React from 'react'
import styles from '../styles/Header.module.css'
const Header = () => {
  return (
    <>
    <nav className={styles.header}>
        <div className={styles.bar}>
            <ul>
                <li>English</li>
                <li>Dallor</li>
            </ul>
        </div>
         <div className={styles.bar2}>
             <ul>
                    <li>Treaking Package</li>
                    <li>FAQ</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
        </div>
    </nav>
    </>
  )
}

export default Header
