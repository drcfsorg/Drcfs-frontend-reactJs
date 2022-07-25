import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:true,
    communityMembers:[]
}

const CommunitySlice=createSlice({
    name:"Community Slice",
    initialState:initialState,
    reducers:{
        replaceProductList(state,action){
            state.communityMembers=action.payload.items;
        },

        isLoading(state,action){
                state.isLoading=action.payload.isLoading
        }
    }
});

export default CommunitySlice;
export const communityAction=CommunitySlice.actions;