import React, { useState } from "react";
import styles from "./verify.module.css";

const Verify = () => {
  const [token, setToken] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (token === "") return;
    else {
      window.location.href = `https://verify.drcfs.org/verify/${token}`;
      setToken("");
    }
  };

  return (
    <div className={styles.verify}>
      <h1 className={styles.heading}>
        Please enter your <span>verification</span> token below
      </h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={token}
          onChange={(event) => setToken(event.target.value)}
          className={styles.inputField}
        />
        <input type="submit" value="Submit" className={styles.button} />
      </form>
    </div>
  );
};

export default Verify;
