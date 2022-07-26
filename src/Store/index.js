import {configureStore} from "@reduxjs/toolkit";
import ProductSlice from "./community-slice";
import EventsSlice from "./events-slice";


const store=configureStore({
    reducer:{
        community:ProductSlice.reducer,
        events:EventsSlice.reducer,
        
    }

});


export default store;