import classes from "./AboutUs.module.css";


const description="Data Research Council For Students(DRCFS) is a student-led community based in Nepal,established to spread digital literacy and Data Science Knowledge all over the country.A community backed by industrial tech experts.Our community has passionate students who come from unique backgrounds."


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