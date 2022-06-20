import classes from "./OtherLinks.module.css";


const navList=[
    "Community",
    "Data Set",
    "Events",
    "Feedbacks"
]

const FooterOtherLinks=()=>{
    return(
        <div className={classes.container}>
                <div>
                    <h1>Other Links</h1>
                </div>
                <div className={classes.list}>
                {
                    navList.map((item)=>{
                       return  <div key={item} className={classes["list-div"]}>
                            <p>{item}</p>
                        </div>
                    })
                }
                </div>

        </div>
    )
}

export default FooterOtherLinks;