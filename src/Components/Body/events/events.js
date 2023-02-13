import classes from "./events.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { IoCalendarSharp } from "react-icons/io5";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router";

const caption =
  "Join our DRCFS community to upskill your data science and machine learning skills from industry experts.";

function Events() {
  const eventsObject = useSelector((state) => state.events);
  const events = eventsObject.events;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/events");
  };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes["box-header"]}>
          <span className={classes.title}>
            <span className={classes["decorate-title"]}>Events</span> for DRCFS
            Members
          </span>
          <span className={classes.caption}>{caption}</span>
          <a
            href="https://discord.com/invite/vEyZsJVS"
            className={classes["join-link"]}
            target="_blank"
            rel="noreferrer"
          >
            <span>Join Now!</span>
          </a>
        </div>
        <div className={classes["events-box"]}>
          {events.slice(0, 3).map((event) => {
            return (
              <div key={event.title} className={classes["event-box"]}>
                <div className={classes.imgBox}>
                  <img
                    className={classes.img}
                    src={event.eventImage}
                    alt={event.title}
                  />
                </div>
                <div className={classes["caption-Box"]}>
                  <div className={classes["eventName-Box"]}>
                    <span className={classes.span}>{event.title}</span>
                  </div>
                  <div className={classes["eventName-BoxSpeaker"]}>
                    <div className={classes.speakerBox}>
                      <BsPersonFill />
                      <p>{event.speaker}</p>
                    </div>
                    <div className={classes.dateBox}>
                      <div className={classes["date-Calendar"]}>
                        <IoCalendarSharp />
                        <p>{event.date}</p>
                      </div>
                      <button disabled className={classes.registerButton}>
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className={classes.button} onClick={handleClick}>
          <span>Explore More Events</span>
          <MdArrowForwardIos className={classes.arrowIcon} />
        </button>
      </div>
    </div>
  );
}

export default Events;
