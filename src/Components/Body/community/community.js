import classes from "./community.module.css";
import communityLogos from "./comunityImages";


const Community=()=>{
    return(
        <div className={classes.box}>
           <div className={classes["community-box"]}>
           <span className={classes.span}>Our Community Members Come From</span>
           <div className={classes.community}>
            {
                communityLogos.map((item)=>{
                    return(
                        <div className={classes.logoBox} key={item.name}>
                            <img className={classes.img} src={item.imageUrl} alt={item.name} />
                            <div className={classes.nameBox}><p>{item.name}</p></div>
                        </div>
                    )
                })
            }
           </div>
           </div>
        </div>
    )

}

export default Community;