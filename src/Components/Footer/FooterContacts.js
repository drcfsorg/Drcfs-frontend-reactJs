import classes from "./FooterContacts.module.css";
import {
  FaDiscord,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const email = "mail@drcfs.org";

const contactIcons = [
  { 
    id:1,
    icon: FaDiscord,
    name: "discord",
    link:"https://discord.gg/TEHNbNvRnh"
  },
  {
    id:2,
    icon: FaLinkedinIn,
    name: "linkedin",
    link:"https://www.linkedin.com/company/data-research-council-for-students/mycompany/"
  },
  { 
    id:3,
    icon: FaFacebookF,
    name: "Facebook",
    link:"https://www.facebook.com/profile.php?id=100077228320202"
  },
  {
    id:4,
    icon: FaInstagram,
    name: "Instagram",
    link:"https://www.linkedin.com/company/data-research-council-for-students/mycompany/"
  },
];

const FooterContacts = () => {
  const onClickHandlerEmail=()=>{
    return window.open(`mailto:${email}`);
  }




  return (
    <div className={classes.container}>
      <div>
        <h1>Contacts</h1>
      </div>
      <div className={classes.list}>
        <p onClick={onClickHandlerEmail}> {email}</p>
      </div>
      <div className={classes.contactBox}>
        {
            contactIcons.map((icon)=>{
                return <a className={classes.iconBox} key={icon.id} href={icon.link} target="_blank" rel="noreferrer">
                    {<icon.icon/>}
                </a>
            })
        }
      </div>
    </div>
  );
};

export default FooterContacts;
