import React from "react";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.fillter}>
        <div className={styles.warpper}>
          <h1 style={{ fontSize: 30, color: "white", fontWeight: "200" }}>
            Have an account?
          </h1>
          <form className={styles.form}>
            <input
              className={styles.input}
              placeholder="Username"
              type={"text"}
            />
            <input
              className={styles.input}
              placeholder="Password"
              type={"password"}
            />
          </form>
          <button className={styles.button}>LOGIN IN</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
