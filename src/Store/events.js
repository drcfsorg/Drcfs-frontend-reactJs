import { eventsAction } from "./events-slice";

const eventsCommunityInfo=()=>{
    return async(dispatch)=>{
           const fetchEvents=async()=>{
                const response=await fetch("https://drcfsapi.herokuapp.com/api/getinfo/events/");
                if(!response.ok){
                    throw new Error("Could not fetched data");
                }
                const data=await response.json();
                const eventsItems=[];
                data.map((event)=>{
                   return eventsItems.push({
                        title:event["event title"],
                        date:event["event date"],
                        time:event["event time"],
                        location:event["event location"],
                        speaker:event["event speaker"],
                        eventImage:event["event_pic"]
                    })
                })


                return eventsItems;
            }


            try{
                const eventsData=await fetchEvents();
                dispatch(
                    eventsAction.fetchEvents({
                        events:eventsData
                    })
                )
            }catch(err){
                console.log(err);
            }
    }
}


export default eventsCommunityInfo;