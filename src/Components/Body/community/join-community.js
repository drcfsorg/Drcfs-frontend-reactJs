import classes from "./join-community.module.css";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";

const JoinCommunity = () => {
  return (
    <div className={classes.box}>
      <div className={classes["headline-box"]}>
            <h1 className={classes.h1}>Join Drcfs Community</h1>
      </div>
      <div className={classes["button-Box"]}>
        <button className={classes["linkedin-button"]}>
          <span>Join linkedin</span>
          <FaLinkedinIn className={classes.icon} />
        </button>
        <button className={classes["discord-button"]}>
          <span>Join Discord</span>
          <FaDiscord className={classes.icon} />
        </button>
      </div>
    </div>
  );
};

export default JoinCommunity;
