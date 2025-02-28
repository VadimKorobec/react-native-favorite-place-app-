import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  reducers: {
    addPlace: (state, action: PayloadAction<Place>) => {
      state.places = [...state.places, action.payload];
    },
  },
});

export const {addPlace} = placesSlice.actions;

export const placesReducer = placesSlice.reducer;
