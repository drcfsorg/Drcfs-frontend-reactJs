import classes from "./events.module.css";
import {MdArrowForwardIos} from "react-icons/md";
import demoImg from "../../../Assets/microsoft101.png";
import {BsPersonFill,BsShare} from "react-icons/bs";
import {IoCalendarSharp} from "react-icons/io5";
import { useSelector } from "react-redux/es/hooks/useSelector";






const caption = "Join our DRCFS community to upskill your data science and machine learning skills from industry experts."




function Events() {
    const eventsObject=useSelector((state)=>state.events)
    const events=eventsObject.events;

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
                                    <div key={event.title} className={classes["event-box"]}>
                                        <div className={classes.imgBox}>
                                         <img className={classes.img} src={event.eventImage} alt={event.title}/>
                                        </div>
                                        <div className={classes["caption-Box"]}>
                                            <div className={classes["eventName-Box"]}>
                                                <span className={classes.span}>{event.title}</span>
                                            </div>
                                            <div className={classes["eventName-BoxSpeaker"]}>
                                                    <div className={classes.speakerBox}>
                                                        <BsPersonFill/>
                                                        <p>{event.speaker}</p>
                                                    </div>
                                                    <div className={classes.dateBox}>
                                                        <div className={classes["date-Calendar"]}>
                                                            <IoCalendarSharp/>
                                                            <p>{event.date} - {event.time}</p>
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