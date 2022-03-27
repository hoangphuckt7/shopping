import React from "react";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

function CategoriesItem({ item }) {
  return (
    <>
      <div className={styles.item}>
        <Link to={`/product_list/${item.cat}`}>
          <img
            src={item.img}
            className={styles.itemImage}
            alt={`${item.title}`}
          />
          <div className={styles.itemInfo}>
            <h1 className={styles.itemTitle}>{item.title}</h1>
            <button className={styles.btn}>SHOP NOW</button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CategoriesItem;
