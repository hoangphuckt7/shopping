import { FavoriteBorder, Search, ShoppingCart } from "@mui/icons-material";
import React from "react";
import styles from "./Products.module.css";
import { Link } from "react-router-dom";

function ProductItem({ item }) {
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <img src={item.img} className={styles.img} alt="demo" />
      <div className={styles.info}>
        <div className={styles.infoIcon}>
          <FavoriteBorder />
        </div>
        <div className={styles.infoIcon}>
          <ShoppingCart />
        </div>
        <Link to={`/product/${item._id}`}>
          <div className={styles.infoIcon}>
            <Search />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
