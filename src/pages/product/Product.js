import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styles from "./Product.module.css";
import { Newsletter, Footer, Announcement, Header } from "../../component";

function Product(props) {
  return (
    <>
      <Announcement />
      <Header />
      <div className={styles.container}>
        <div className={styles.img}>
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="demo" />
        </div>
        <div className={styles.infoContainer}>
          <h1 style={{ fontWeight: "200" }}>Denim Jumpsuit</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span style={{ fontSize: "4em", fontWeight: "200" }}>$ 20</span>
          <div className={styles.fitterContainer}>
            <div className={styles.fitter}>
              <span className={styles.fitterTitle}>Color</span>
              <div
                className={styles.fitterColor}
                style={{ background: "black" }}
              />
              <div
                className={styles.fitterColor}
                style={{ background: "darkblue" }}
              />
              <div
                className={styles.fitterColor}
                style={{ background: "gray" }}
              />
            </div>
            <div className={styles.fitter}>
              <span className={styles.fitterTitle}>Size</span>
              <select className={styles.select}>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className={styles.addContainer}>
            <div className={styles.amountContainer}>
              <Remove />
              <span className={styles.amount}>1</span>
              <Add />
            </div>
            <button className={styles.button}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Product;
