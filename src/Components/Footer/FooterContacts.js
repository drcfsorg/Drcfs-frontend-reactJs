import classes from "./FooterContacts.module.css";
import {
  FaDiscord,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const email = "drcfs@gmail.com";

const contactIcons = [
  { 
    id:1,
    icon: FaDiscord,
    name: "discord",
    link:""
  },
  {
    id:2,
    icon: FaLinkedinIn,
    name: "discord",
    link:""
  },
  { 
    id:3,
    icon: FaFacebookF,
    name: "discord",
    link:""
  },
  {
    id:4,
    icon: FaInstagram,
    name: "discord",
    link:""
  },
];

const FooterContacts = () => {
  return (
    <div className={classes.container}>
      <div>
        <h1>Contacts</h1>
      </div>
      <div className={classes.list}>
        <p> {email}</p>
      </div>
      <div className={classes.contactBox}>
        {
            contactIcons.map((icon)=>{
                return <a className={classes.iconBox} key={icon.id}>
                    {<icon.icon/>}
                </a>
            })
        }
      </div>
    </div>
  );
};

export default FooterContacts;
