import classes from "./events.module.css";
import {MdArrowForwardIos} from "react-icons/md";
import demoImg from "../../../Assets/event.jpg";
import {BsPersonFill,BsShare} from "react-icons/bs";
import {IoCalendarSharp} from "react-icons/io5";






const caption = "Join our DRCFS community to upskill your data science and machine learning skills from industry experts."

//this is just a dummy data to show the event box format
//Number of event should be limited to only 8 for the homepage 
const events=[
    {
        id:1,
        name:"Lorem ipsum dolor sit amet",
        imgUrl:demoImg,
        speaker:"Kp Oli,Founder - Guffadi Club",
        date:"Jun 26,2022-7:45 pm"
    },
    {
        id:2,
        name:"Lorem ipsum dolor sit amet",
        imgUrl:demoImg,
        speaker:"Kp Oli,Founder - Guffadi Club",
        date:"Jun 26,2022-7:45 pm"
    },
    {
        id:3,
        name:"Lorem ipsum dolor sit amet",
        imgUrl:demoImg,
        speaker:"Kp Oli,Founder - Guffadi Club",
        date:"Jun 26,2022-7:45 pm"
    },
    {
        id:4,
        name:"Lorem ipsum dolor sit amet",
        imgUrl:demoImg,
        speaker:"Kp Oli,Founder - Guffadi Club",
        date:"Jun 26,2022-7:45 pm"
    },
    {
        id:5,
        name:"Lorem ipsum dolor sit amet",
        imgUrl:demoImg,
        speaker:"Kp Oli,Founder - Guffadi Club",
        date:"Jun 26,2022-7:45 pm"
    }
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
                                    <div key={event.id} className={classes["event-box"]}>
                                        <div className={classes.imgBox}>
                                         <img className={classes.img} src={event.imgUrl} alt={event.name}/>
                                        </div>
                                        <div className={classes["caption-Box"]}>
                                            <div className={classes["eventName-Box"]}>
                                                <span className={classes.span}>{event.name}</span>
                                            </div>
                                            <div className={classes["eventName-BoxSpeaker"]}>
                                                    <div className={classes.speakerBox}>
                                                        <BsPersonFill/>
                                                        <p>{event.speaker}</p>
                                                    </div>
                                                    <div className={classes.dateBox}>
                                                        <div className={classes["date-Calendar"]}>
                                                            <IoCalendarSharp/>
                                                            <p>{event.date}</p>
                                                        </div>
                                                        <div className={classes.shareIconBox}>
                                                        <BsShare className={classes.shareIcon}/>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                       </div>
                <button className={classes.button}>
                <span>Explore More Events</span>
                <MdArrowForwardIos className={classes.arrowIcon}/></button>
            </div>
        </div>
    )
}

export default Events;