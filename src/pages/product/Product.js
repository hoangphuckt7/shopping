import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import productApi from "../../axios/productApi";
import { Announcement, Footer, Header, Newsletter } from "../../component";
import styles from "./Product.module.css";

function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await productApi.get(id);
        setProduct(res);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  return (
    <>
      <Announcement />
      <Header />
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={product.img} alt="demo" />
        </div>
        <div className={styles.infoContainer}>
          <h1 style={{ fontWeight: "200" }}>{product.title}</h1>
          <p>{product.desc}</p>
          <span style={{ fontSize: "4em", fontWeight: "200" }}>
            $ {product.price}
          </span>
          <div className={styles.fitterContainer}>
            <div className={styles.fitter}>
              <span className={styles.fitterTitle}>Color</span>
              {product.color?.map((item) => (
                <div
                  key={item}
                  className={styles.fitterColor}
                  style={{ background: `${item}` }}
                />
              ))}
            </div>
            <div className={styles.fitter}>
              <span className={styles.fitterTitle}>Size</span>
              <select className={styles.select}>
                {product.size?.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.addContainer}>
            <div className={styles.amountContainer}>
              <Remove onClick={() => handleQuantity("dec")} />
              <span className={styles.amount}>{quantity}</span>
              <Add onClick={() => handleQuantity("inc")} />
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
