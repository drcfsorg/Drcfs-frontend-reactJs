import classes from "./FooterContacts.module.css";
import {
  FaDiscord,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const email = "johnysins6969@gmail.org";

const contactIcons = [
  { 
    id:1,
    icon: FaDiscord,
    name: "discord",
  },
  {
    id:2,
    icon: FaLinkedinIn,
    name: "discord",
  },
  { 
    id:3,
    icon: FaFacebookF,
    name: "discord",
  },
  {
    id:4,
    icon: FaInstagram,
    name: "discord",
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
                return <div className={classes.iconBox} key={icon.id}>
                    {<icon.icon/>}
                </div>
            })
        }
      </div>
    </div>
  );
};

export default FooterContacts;
