import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterState {
  value1: number;
  value10: number;
}

const initialState: counterState = {
  value1: 0,
  value10: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      state.value1++;
    },
    incremented5(state, action: PayloadAction<number>) {
      state.value10 += action.payload;
    },
  },
});

export const { incremented, incremented5 } = counterSlice.actions;
export default counterSlice.reducer;
