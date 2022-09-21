import { createSlice } from "@reduxjs/toolkit";

export const targetslice = createSlice({
  name: "target name",
  initialState: {
    value: "Unassigned",
  },
  reducers: {
    change: (state, Action) => {
      state.value = Action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change } = targetslice.actions;

export default targetslice.reducer;
