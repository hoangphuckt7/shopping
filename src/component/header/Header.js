import Search from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.language}>EN</span>
          <div className={styles.searchContainer}>
            <input className={styles.input} placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className={styles.center}>
          <h1 className={styles.logo}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              SHOPPING
            </Link>
          </h1>
        </div>
        <div className={styles.right}>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className={styles.menuItem}>REGISTER</div>
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <div className={styles.menuItem}>SIGN IN</div>
          </Link>
          <div className={styles.menuItem}>
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
