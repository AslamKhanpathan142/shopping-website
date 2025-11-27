import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const footerLinks = [
    {
      title: "POPULAR",
      items: ["Shoes", "T-Shirt", "Jackets", "Hat", "Accessories"],
    },
    {
      title: "MENU",
      items: ["All Category", "Gift Cards", "Special Events", "Testimonial", "Blog"],
    },
    {
      title: "OTHER",
      items: ["Tracking Package", "FAQ", "About Us", "Contact Us", "Terms and Conditions"],
    },
  ];

  return (
    <div className={styles.footer}>
      {/* Left Section */}
      <div className={styles.leftBox}>
        <h2 className={styles.logo}>ECOMMERCE</h2>
        <p className={styles.text}>
          Ecommerce is a free UI Kit from Paperpillar that you can use for your
          personal or commercial project.
        </p>

        <div className={styles.inputBox}>
          <input
            type="text"
            placeholder="Type your email address"
            className={styles.input}
          />
          <button className={styles.button}>Submit</button>
        </div>
      </div>

      {/* Right Section – Generated with map */}
      <div className={styles.rightBox}>
        {footerLinks.map((section, index) => (
          <div key={index} className={styles.column}>
            <h3 className={styles.columnTitle}>{section.title}</h3>
            {section.items.map((item, idx) => (
              <p key={idx} className={styles.linkItem}>
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
