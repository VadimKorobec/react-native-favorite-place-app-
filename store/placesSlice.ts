import { createSlice } from "@reduxjs/toolkit";
import { Place } from "../types/place";

interface placesState {
  places: Place[];
}

const initialState: placesState = {
  places: [],
};

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {},
});

export const {} = placesSlice.actions;

export const placesReducer = placesSlice.reducer;
