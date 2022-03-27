import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Announcement,
  Footer,
  Header,
  Newsletter,
  Products,
} from "../../component";
import styles from "./ProductList.module.css";

function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <>
      <Announcement />
      <Header />
      <div style={{ padding: 20 }}>
        <h1>{cat}</h1>
        <div className={styles.filterContainer}>
          <div className={styles.filter}>
            <span className={styles.filterText}>Filter Products:</span>
            <select
              className={styles.select}
              name="color"
              onChange={handleFilters}
            >
              <option disabled>Color</option>
              <option>Black</option>
              <option>White</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Yellow</option>
              <option>Green</option>
            </select>
            <select
              className={styles.select}
              name="size"
              onChange={handleFilters}
            >
              <option disabled>Size</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className={styles.filter}>
            <span className={styles.filterText}>Sort Products:</span>
            <select
              className={styles.select}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value={"Newest"}>Newest</option>
              <option value={"asc"}>Price (asc)</option>
              <option value={"desc"}>Price (desc)</option>
            </select>
          </div>
        </div>
        <Products cat={cat} filters={filters} sort={sort} />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default ProductList;
