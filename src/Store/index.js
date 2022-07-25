import {configureStore} from "@reduxjs/toolkit";
import ProductSlice from "./community-slice";


const store=configureStore({
    reducer:{
        community:ProductSlice.reducer,
        
    }

});


export default store;