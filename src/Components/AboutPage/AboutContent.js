import classes from "./AboutContent.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useSelector } from "react-redux";

const AboutContent = () => {
  const community = useSelector((state) => state.community);

  return (
    <div className={classes.container}>
      <div className={classes.headerBox}>
        <h1>
          The <span>team </span> that makes it all possible
        </h1>
      </div>
      <div className={classes.insideBox}>
        {community.loading ? (
          <div className={classes.spinner}></div>
        ) : (
          community.communityMembers.map((data) => {
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
