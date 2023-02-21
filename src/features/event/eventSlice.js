import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  events: [],
  loading: false,
  error: "",
};

export const fetchEvents = createAsyncThunk("event/fetchEvents", async () => {
  const response = await axios.get(
    "https://webapi.drcfs.org/api/getinfo/events/"
  );
  return response.data;
});

const eventSlice = createSlice({
  name: "event",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      const eventsList = [];

      const fetchedList = action.payload;

      // Reversing the array to get latest events first
      for (let i = fetchedList.length - 1; i >= 0; i--) {
        eventsList.push({
          title: fetchedList[i]["event title"],
          date: fetchedList[i]["event date_time"],
          location: fetchedList[i]["event location"],
          speaker: fetchedList[i]["event speaker"],
          eventImage: fetchedList[i]["event_pic"],
        });
      }
      state.events = eventsList;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.events = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default eventSlice.reducer;
