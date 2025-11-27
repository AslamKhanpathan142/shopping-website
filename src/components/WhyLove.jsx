import React from "react";
import styles from "../styles/WhyLove.module.css";
import icon1 from '/coolicon.png'
import icon2 from '/phone.png'
import icon3 from '/refresh_02.png'
const WhyLove = () => {
  const cardData = [
    {
      icon: icon1,
      title: "Take care with love",
      text: `We take care your package with full of attention and of course full of love.
             We want to make sure you’ll receive your package like you receive your birthday gift.`,
    },
    {
      icon: icon2,
      title: "Friendly Customer Service",
      text: `You do not need to worry when you want to check your package.
             We will always answer whatever your questions. Just click on the chat icon and we will talk.`,
    },
    {
      icon: icon3,
      title: "Refund Process",
      text: `Refund is such a bad experience and we don’t want that thing happen to you.
             But when it’s happen, we will make sure you will go through a smooth and friendly process.`,
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Why you’ll love to shop on our website</h1>

      <div className={styles.cardsWrapper}>
        {cardData.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconCircle}>
                <img src={item.icon} alt="" />
            </div>
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyLove;
