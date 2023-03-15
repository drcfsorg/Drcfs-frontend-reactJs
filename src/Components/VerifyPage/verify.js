import React, { useState } from "react";
import styles from "./verify.module.css";
import axios from "axios";

const Verify = () => {
  const [token, setToken] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (token === "") return;
    else {
      const url = `/verify/${token}`;
      setIsLoading(true);
      fetchData(url);
      setToken("");
    }
  };

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url, { responseType: "arraybuffer" });
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      const imageSrc = `data:image/png;base64,${base64}`;
      if (imageSrc.length === 110) {
        setError("Sorry your certificate was not found on our server :(");
        setImageSrc(null);
        setIsLoading(false);
        return;
      }
      setImageSrc(imageSrc);
      setError(null);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "my-image.png";
    link.href = imageSrc;
    link.click();
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
        <button type="submit" className={styles.button} disabled={isLoading}>
          Verify
        </button>
      </form>
      {isLoading && <h2 style={{ color: "#fff" }}>Loading....</h2>}
      {!isLoading && imageSrc && (
        <div className={styles.certificate}>
          <img
            src={imageSrc}
            alt="certificate"
            className={styles.certificateImage}
          />
          <button onClick={handleDownload} className={styles.button}>
            Download
          </button>
        </div>
      )}
      {!isLoading && error && <h2 className={styles.errorMessage}>{error}</h2>}
    </div>
  );
};

export default Verify;
