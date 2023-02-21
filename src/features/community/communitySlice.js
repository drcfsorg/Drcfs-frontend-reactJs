import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  communityMembers: [],
  loading: false,
  error: "",
};

export const fetchMembers = createAsyncThunk(
  "community/fetchMembers",
  async () => {
    const response = await axios.get(
      "https://webapi.drcfs.org/api/getinfo/communitymembers/"
    );
    return response.data;
  }
);

const communitySlice = createSlice({
  name: "community",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMembers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMembers.fulfilled, (state, action) => {
      const fetchedList = action.payload;
      const newList = fetchedList.map((member) => ({
        name: member.name,
        role: member.role,
        github: member.github,
        profileImage: member.picture,
        linkedin: member.linkedin,
      }));

      state.loading = false;
      state.communityMembers = newList;
      state.error = "";
    });
    builder.addCase(fetchMembers.rejected, (state, action) => {
      state.loading = false;
      state.communityMembers = [];
      state.error = action.error.message;
    });
  },
});

export default communitySlice.reducer;
