import React from "react";
import styles from "../styles/BlogSection.module.css";
import blog from '/blog.png'
const BlogSection = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>From The Blog</h2>

      <div className={styles.contentBox}>
        <img
          src={blog}
          alt="Blog"
          className={styles.image}
        />

        <div className={styles.textBox}>
          <h1 className={styles.title}>
            How to combine your daily outfit to looks fresh and cool.
          </h1>

          <p className={styles.description}>
            Maybe you don’t need to buy new clothes to have nice, cool, fresh looking
            outfit everyday. Maybe what you need is to combine your clothes collections.
            Mix and match is the key.
          </p>

          <button className={styles.button}>READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
