import classes from "./join-community.module.css";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";

const JoinCommunity = () => {
  return (
    <div className={classes.box}>
      <div className={classes["headline-box"]}>
            <h1 className={classes.h1}>Join Drcfs Community</h1>
      </div>
      <div className={classes["button-Box"]}>
        <a className={classes["linkedin-button"]} href="https://www.linkedin.com/company/data-research-council-for-students/mycompany/" target="_blank" rel="noreferrer">
          <span>Join linkedin</span>
          <FaLinkedinIn className={classes.icon} />
        </a>
        <a className={classes["discord-button"]} href="https://discord.gg/TEHNbNvRnh" target="_blank" rel="noreferrer">
          <span>Join Discord</span>
          <FaDiscord className={classes.icon} />
        </a>
      </div>
    </div>
  );
};

export default JoinCommunity;
