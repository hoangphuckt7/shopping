import {
  Facebook,
  GitHub,
  Instagram,
  MailOutline,
  Phone,
  Twitter,
} from "@mui/icons-material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>SHOPPING</h1>
        <p className={styles.desc}>
          Louis Vuitton products are designed to last. At every stage of the
          creative process, we analyze the environmental impact of our creations
          throughout their entire life cycle: we preserve biodiversity by using
          fewer raw resources, in particular recycled and biosourced materials,
          we contribute to the climate effort by consuming less energy in the
          production of our materials, and we integrate reparability from the
          first stages of the creation process. By 2020, 33% of our product
          categories have already undergone a Life Cycle Assessment (LCA).
        </p>
        <div style={{ display: "flex" }}>
          <div className={styles.icon} style={{ backgroundColor: "#3B5999" }}>
            <Facebook />
          </div>
          <div className={styles.icon} style={{ backgroundColor: "#E4405F" }}>
            <Instagram />
          </div>
          <div className={styles.icon} style={{ backgroundColor: "#55ACEE" }}>
            <Twitter />
          </div>
          <div className={styles.icon} style={{ backgroundColor: "#E60023" }}>
            <GitHub />
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <h3>Useful Links</h3>
        <ul className={styles.list}>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className={styles.right}>
        <h3>Contact</h3>
        <div className={styles.contactItem}>
          <LocationOnOutlinedIcon style={{ marginRight: "10px" }} /> 622 Dixie
          Path , South Tobinchester 98336
        </div>
        <div className={styles.contactItem}>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </div>
        <div className={styles.contactItem}>
          <MailOutline style={{ marginRight: "10px" }} /> contact@lama.dev
        </div>
      </div>
    </div>
  );
}

export default Footer;
