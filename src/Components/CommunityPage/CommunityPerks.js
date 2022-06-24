import classes from "./CommunityPerks.module.css";


//Must be fetched from backend
const demoList=[{
    id:1,
    title:"Letter Of Recommendation(LOR)",
    description:"We assure you to provide the strong letter of recommendation(LoR) for the better days to come."
},
{
    id:2,
    title:"Resume Builder",
    description:"We guarantee you to refine your resume with our experts sharing some tips regarding that resume building."
},
{
    id:3,
    title:"Better Job Prospects",
    description:" We as a team will provide you a better job prospects in first basis with you all."
},

];


const CommunityPerks=()=>{
    return (
        <div className={classes.container}>
            <div className={classes["header-Box"]}>
                <h1>Perks Of Joining <span className={classes.span}>DR</span>CFS</h1>
            </div>
            <div className={classes["perksList-Box"]}>
                {
                    demoList.map((item)=>{
                        return <div key={item.id} className={classes.perkBox}>
                                <div className={classes.headerBox}>
                                <h2>{item.title}</h2>
                                </div>
                                <div className={classes.listBox}>

                                </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}


export default CommunityPerks;