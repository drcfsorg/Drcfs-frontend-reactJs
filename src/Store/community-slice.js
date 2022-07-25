import { createSlice } from "@reduxjs/toolkit";

const initialState={
    communityMembers:[]
}

const CommunitySlice=createSlice({
    name:"Community Slice",
    initialState:initialState,
    reducers:{
        replaceProductList(state,action){
            state.communityMembers=[1,2,3,4,5];
        }
    }
});

export default CommunitySlice;
export const communityAction=CommunitySlice.actions;