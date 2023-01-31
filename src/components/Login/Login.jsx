import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.card}>
      <h6>Welcome to News India</h6>
      <p>Log in to know what's happening around you</p>

      <input
        type={email}
        className={styles.email}
        placeholder="Email Address"
      />
    </div>
  );
};

export default Login;
