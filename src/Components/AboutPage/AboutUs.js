import classes from "./AboutUs.module.css";


const description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "


const AboutUs=()=>{
    return(
        <div className={classes.container}>
            <div className={classes.headerBox}>
               <h1><span>High School</span> Lead Community</h1> 
               <p>{description}</p>
            </div>
        </div>
    )

}

export default AboutUs;