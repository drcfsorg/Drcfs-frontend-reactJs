import classes from "./EventContent.module.css";
import {BsPersonFill} from "react-icons/bs";
import {IoCalendarSharp} from "react-icons/io5";
import { useSelector } from "react-redux";


const EventContent=()=>{
    const eventsObject=useSelector((state)=>state.events)
    const events=eventsObject.events;
    return(
        <div className={classes.container}>
                <div className={classes.headerBox}>
                    <h1>UpComing <span>Events</span></h1>
                </div>
                <div className={classes.eventsBox}>
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
                                                            <p>{event.date}</p>
                                                        </div>
                                                       
                                                        <button disabled className={classes.registerButton}>Register</button>
                                                        
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        
                    }

                </div>
        </div>
    )

}

export default EventContent;