import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountriesState {
  filter: string;
}

const initialState: CountriesState = { filter: "" };

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = countriesSlice.actions;
export const countriesReducer = countriesSlice.reducer;
