import classes from "./FooterDesc.module.css";


//Make the description small as far as possible
const description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"


const FooterDescription=()=>{
    return(
        <div className={classes.descBox}>
            <div className={classes.headerBox}><span>DR</span>CFS</div>
            <div className={classes.descContainer}>{description}</div>
            <div className={classes.copyRightBox}>
                <p>&copy;2022 All Rights Reserved to DRCFS</p>
            </div>
        </div>
    )
}

export default FooterDescription;