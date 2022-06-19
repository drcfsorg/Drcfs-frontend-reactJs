import classes from "./events.module.css";
import {MdKeyboardArrowRight} from "react-icons/md";

const caption = "Join our DRCFS community to upskill your data science and machine learning skills from industry experts."

//this is just a dummy data to show the event box format
//Number of event should be limited to only 8 for the homepage 
const events=[
    1,2,3,4,5,6,7,8
]

function Events() {
    return (
        <div className={classes.container}>
            <div className={classes.box}>
                <div className={classes["box-header"]}>
                    <span className={classes.title}><span className={classes["decorate-title"]}>Events</span> for DRCFS Members</span>
                    <span className={classes.caption}>{caption}</span>
                    <a href="https://www.youtube.com/" className={classes["join-link"]}><span >Join Now!</span></a>
                </div>
                <div className={classes["events-box"]}>
                        {
                            events.map((event)=>{
                                return(
                                    <div key={event} className={classes["event-box"]}>
                                        <h1>{event}</h1>
                                    </div>
                                )
                            })
                        }
                       </div>
                <button className={classes.button}>
                <span>Explore More Events</span>
                <MdKeyboardArrowRight className={classes.arrowIcon}/></button>
            </div>
        </div>
    )
}

export default Events;