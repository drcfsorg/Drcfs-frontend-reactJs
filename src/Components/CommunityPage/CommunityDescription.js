import classes from "./CommunityDescription.module.css";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";

const caption =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const CommunityDescription = () => {
  return (
    <div className={classes.container}>
      <div className={classes["join-Us-Box"]}>
        <div className={classes.headerBox}>
          <h1 className={classes.h1}>
            Join Nepal's Largest <span className={classes.span}>Data Science Community</span> 
          </h1>
        </div>
        <div className={classes.captionBox}>
          <p>{caption}</p>
        </div>
        <div className={classes.buttonBox}>
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
    </div>
  );
};

export default CommunityDescription;
