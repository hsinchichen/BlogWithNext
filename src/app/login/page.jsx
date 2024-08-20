import React from "react";
import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.scicalButton}>Sign in with Google</div>
        <div className={styles.scicalButton}>Sign in with Github</div>
        <div className={styles.scicalButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
}
