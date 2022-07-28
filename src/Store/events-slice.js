import { createSlice } from "@reduxjs/toolkit"

const initialState={
    events:[]
}


const EventsSlice=createSlice({
    name:"Events",
    initialState:initialState,
    reducers:{
        fetchEvents(state,action){
            state.events=action.payload.events;
        }
    }
});


export default EventsSlice;
export const eventsAction=EventsSlice.actions;