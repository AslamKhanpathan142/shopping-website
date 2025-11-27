import React from "react";
import styles from "../styles/Navbar.module.css";
import coolicon from '/coolicon1.png'
import user from '/user.png'
import Vector from '/Vector.png'
import search from '/search.png'
const Navbar = () => {
  return (
    <>
      <nav className={styles.header}>
        <div className={styles.bar}>
          <div className={styles.inputBar}>
            <p>ECOMMERCE</p>
          
          <div className={styles.category}>
            <input type="text" 
            placeholder="Search Here"/>
            <img src={search} alt="" />
            <ul>
              <li>All Category</li>
              <li>Gift Cards</li>
              <li>Special Event</li>
            </ul>
          </div>
          </div>
        </div>
        <div className={styles.bar2}>
          <ul>
            <li><img src={coolicon} alt="" style={{marginTop: '3px'}}/></li>
            <li><img src={user} alt="" /></li>
            <li><img src={Vector} alt="" style={{marginTop: '3px'}}/></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
