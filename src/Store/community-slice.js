import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  communityMembers: [],
};

const CommunitySlice = createSlice({
  name: "Community Slice",
  initialState: initialState,
  reducers: {
    replaceProductList(state, action) {
      state.communityMembers = action.payload.items;
    },
  },
});

export default CommunitySlice;
export const communityAction = CommunitySlice.actions;
