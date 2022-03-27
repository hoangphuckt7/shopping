import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styles from "./Cart.module.css";
import { Newsletter, Footer, Announcement, Header } from "../../component";

function Cart() {
  return (
    <>
      <Announcement />
      <Header />
      <div>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>YOUR BAG</h1>
          <div className={styles.top}>
            <button className={styles.topButton}>CONTINUE SHOPPING</button>
            <div>
              <span className={styles.topText}>Shopping Bag(2)</span>
              <span className={styles.topText}>Your Wishlist (0)</span>
            </div>
            <button className={styles.topButton} type="filled">
              CHECKOUT NOW
            </button>
          </div>
          <div className={styles.bottom}>
            <div className={styles.info}>
              <div className={styles.product}>
                <div className={styles.productDetail}>
                  <img
                    src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                    alt="demo"
                  />
                  <div className={styles.details}>
                    <span>
                      <b>Product:</b> JESSIE THUNDER SHOES
                    </span>
                    <span>
                      <b>ID:</b> 93813718293
                    </span>
                    <div
                      className={styles.productColor}
                      style={{ backgroundColor: "black" }}
                    />
                    <span>
                      <b>Size:</b> 37.5
                    </span>
                  </div>
                </div>
                <div className={styles.priceDetail}>
                  <div className={styles.productAmountContainer}>
                    <Add />
                    <div className={styles.productAmount}>2</div>
                    <Remove />
                  </div>
                  <div className={styles.productPrice}>$ 30</div>
                </div>
              </div>
              <hr
                style={{ backgroundColor: "#eee", border: "none", height: 1 }}
              />
              <div className={styles.product}>
                <div className={styles.productDetail}>
                  <img
                    src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                    alt="demo"
                  />
                  <div className={styles.details}>
                    <span>
                      <b>Product:</b> HAKURA T-SHIRT
                    </span>
                    <span>
                      <b>ID:</b> 93813718293
                    </span>
                    <div
                      className={styles.productColor}
                      style={{ backgroundColor: "gray" }}
                    />
                    <span>
                      <b>Size:</b> M
                    </span>
                  </div>
                </div>
                <div className={styles.priceDetail}>
                  <div className={styles.productAmountContainer}>
                    <Add />
                    <div className={styles.productAmount}>1</div>
                    <Remove />
                  </div>
                  <div className={styles.productPrice}>$ 20</div>
                </div>
              </div>
            </div>
            <div className={styles.summary}>
              <h1 style={{ fontWeight: "200" }}>ORDER SUMMARY</h1>
              <div className={styles.summaryItem}>
                <span>Subtotal</span>
                <span>$ 80</span>
              </div>
              <div className={styles.summaryItem}>
                <span>Estimated Shipping</span>
                <span>$ 5.90</span>
              </div>
              <div className={styles.summaryItem}>
                <span>Shipping Discount</span>
                <span>$ -5.90</span>
              </div>
              <div className={styles.summaryItem} type="total">
                <span>Total</span>
                <span>$ 80</span>
              </div>
              <button className={styles.button}>CHECKOUT NOW</button>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Cart;
