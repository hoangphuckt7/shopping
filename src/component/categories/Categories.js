import React from "react";
import styles from "./Categories.module.css";
import CategoriesItem from "./CategoriesItem";
import { categories } from "../../data";

function Categories() {
  return (
    <div className={styles.container}>
      {categories.map((item) => (
        <CategoriesItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Categories;
