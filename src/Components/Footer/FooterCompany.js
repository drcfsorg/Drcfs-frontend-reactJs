import classes from "./FooterCompany.module.css";


const navList=[
    "About",
    "Privacy Policy",
    "Terms & Conditions"
]

const FooterCompany=()=>{
    return(
        <div className={classes.container}>
                <div>
                    <h1>Company</h1>
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

export default FooterCompany;