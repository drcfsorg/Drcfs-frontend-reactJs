import classes from "./description.module.css";
import {FaDiscord,FaLinkedinIn} from "react-icons/fa";



const description =
  "Make smart friends, learn from experts, and network like you’ve never done before. It’s a place to have fun, get amazing opportunities, and make new friends!";

const Description = () => {
  return (
    <div className={classes.descBox}>
      <div className={classes["headline-description"]}>
        <h1 className={classes.h1}>
          Nepal's most active student community with over{" "}
          <span className={classes.span}>2,000</span> members.
        </h1>
        <p className={classes.p}>{description}</p>
      </div>
      <div className={classes["button-Box"]}>
        <button className={classes["linkedin-button"]}>
            <span>Join linkedin</span>
            <FaLinkedinIn className={classes.icon}/>
        </button>
        <button className={classes["discord-button"]}><span>Join Discord</span>
        <FaDiscord className={classes.icon}/></button>
      </div>
    </div>
  );
};

export default Description;
