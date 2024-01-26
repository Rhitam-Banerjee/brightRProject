import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  age: 0,
  maxAge: 12,
};
const ageSlice = createSlice({
  name: "age",
  initialState,
  reducers: {
    setAge: (state, { payload }) => {
      state.age = payload;
    },
  },
});
export const { setAge } = ageSlice.actions;
export default ageSlice.reducer;
