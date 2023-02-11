import classes from "./FooterDesc.module.css";
import { useState, useEffect } from "react";

//Make the description small as far as possible
// const description="Data Research Council for Students is a nonprofit organization that aims to provide quality data literacy to every part of the world."

const FooterDescription = () => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("https://webapi.drcfs.org/api/getinfo/aboutus/")
      .then((res) => res.json())
      .then((data) => setDescription(data.aboutus));
  }, []);

  return (
    <div className={classes.descBox}>
      <div className={classes.headerBox}>
        <span>DR</span>CFS
      </div>
      <div className={classes.descContainer}>{description}</div>
      <div className={classes.copyRightBox}>
        <p>&copy;2022 All Rights Reserved to DRCFS</p>
      </div>
    </div>
  );
};

export default FooterDescription;
