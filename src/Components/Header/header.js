import classes from "./header.module.css";
import drcfsIcon from "../../Assets/DRC4S.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// , "Events", "About", "DatSets"

const headers = [
  {
    id:1,
    headerName:"Community",
    path:"/community"
  },
  {
    id:2,
    headerName:"Events",
    path:"/events"
  },
  {
    id:3,
    headerName:"About",
    path:"/about"
  },
  {
    id:4,
    headerName:"DataSets",
    path:"/datasets"
  }
];

const Header = () => {
  const [clicked, setIsClicked] = useState(false);
  

  const onClickHandler = () => {
    setIsClicked(!clicked);
  };

  //To check whether the user has clicked on the hamburger icon or not;

  const lineClass = clicked ? classes.change : classes.lineBox;

  //To Show the Nav List

  const navClass=clicked?classes.nav1:classes.navList;

  return (
      <nav className={classes.navBar}>

        <div className={classes.mobileBox}>
          <img className={classes.imageIcon} src={drcfsIcon} alt="DRCFS Logo" />
          <div className={lineClass} onClick={onClickHandler}>
            <div className={classes.line}></div>
          </div>
        </div>


        <div className={navClass}>
        <ul className={classes.ulList}>
          {headers.map((header) => {
            return (
              <div className={classes.liBox} key={header.id}>
                <NavLink to={header.path} className={classes.navLink}><li>{header.headerName}</li></NavLink>
                <div className={classes.underLine}></div>
              </div>
            );
          })}
          <button className={classes.button}>Sign In</button>
        </ul>
        </div>
      </nav>
  
  );
};

export default Header;
