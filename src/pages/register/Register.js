import React from "react";
import styles from "./Register.module.css";

function Register() {
  return (
    <div div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 style={{ fontSize: 24, fontWeight: "300" }}>CREATE AN ACCOUNT</h1>
        <form className={styles.form}>
          <input placeholder="name" />
          <input placeholder="last name" />
          <input placeholder="username" />
          <input placeholder="email" />
          <input placeholder="password" />
          <input placeholder="confirm password" />
        </form>
        <span>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </span>
        <button>CREATE</button>
      </div>
    </div>
  );
}

export default Register;
