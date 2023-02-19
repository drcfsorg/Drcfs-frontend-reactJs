import classes from "./AboutContent.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useSelector } from "react-redux/es/exports";

const AboutContent = () => {
  const communityData = useSelector((state) => state.community);
  const communityArray = communityData.communityMembers;

  return (
    <div className={classes.container}>
      <div className={classes.headerBox}>
        <h1>
          The <span>team </span> that makes it all possible
        </h1>
      </div>
      <div className={classes.insideBox}>
        {communityArray.length === 0 ? (
          <div className={classes.spinner}></div>
        ) : (
          communityArray.map((data) => {
            return (
              <div className={classes["member-Box"]} key={data.name}>
                <div className={classes.imgBox}>
                  <img
                    className={classes.img}
                    src={data.profileImage}
                    alt={data.name}
                  />
                  <div className={classes.hoverBox}>
                    <a
                      className={classes.iconBox}
                      href={data.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <BsGithub />
                    </a>
                    <a
                      className={classes.iconBox}
                      href={data.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsLinkedin />
                    </a>
                  </div>
                </div>
                <div className={classes.teamheaderBox}>
                  <span>{data.name}</span>
                </div>
                <div className={classes.roleBox}>
                  <span>{data.role}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AboutContent;
