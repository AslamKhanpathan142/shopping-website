import React, { useState } from "react";
import styles from "../styles/Colors.module.css";

const Colors = () => {
    const [colorFill, setColorFill] = useState('')
  const colorsData = [
    {
      id: 1,
      color: "#E25F5F",
      text: "RED PASTEL",
    },
    {
      id: 2,
      color: "#B8E25F",
      text: "LIME GREEN",
    },
    {
      id: 3,
      color: "#233C6B",
      text: "NAVY BLUE",
    },
    {
      id: 4,
      color: "#FFFFFF",
      text: `CLEAN WHITE `,
    },
    {
      id: 5,
      color: "#5FABE2",
      text: "BLUE SKY",
    },
    {
      id: 6,
      color: "#B54EF4",
      text: "PURPLE",
    },
   
    {
      id: 7,
      color: "#F44E8A",
      text: "PINK",
    },
    {
      id: 8,
      color: "#F4CF4E",
      text: "YELLOW",
    },
    {
      id: 9,
      color: "#44936D",
      text: "DARK GREEN",
    },
  ];
  return (
    <>
    <div className={styles.colorDiv}>
      {colorsData.map((item) => (
        <div key={item.id} className={styles.Colors}>
          <div className={styles.color} style={{backgroundColor: `${item.color}`}}></div>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
 </>
  );
};

export default Colors;
