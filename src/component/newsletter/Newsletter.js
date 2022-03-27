import { Send } from "@mui/icons-material";
import React from "react";
import styles from "./Newsletter.module.css";

function Newsletter() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Newsletter</h1>
      <div className={styles.desc}>
        Get timely updates from your favorite products.
      </div>
      <div className={styles.inputContainer}>
        <input className={styles.input} placeholder={"Enter email ..."} />
        <button className={styles.btn}>
          <Send />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
