import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  seriesSelected: "",
  showPopularBooks: false,
  popularSeries: [],
  bookTitle: [],
};
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setTitles: (state, { payload }) => {
      state.bookTitle = payload;
      state.seriesSelected = Object.keys(payload)[0];
    },
    setShowPopularBooks: (state) => {
      state.showPopularBooks = true;
    },
    setHidePopularBooks: (state) => {
      state.showPopularBooks = false;
    },
    changeSeries: (state, { payload }) => {
      state.seriesSelected = payload;
    },
  },
});
export const {
  setTitles,
  setShowPopularBooks,
  setHidePopularBooks,
  changeSeries,
} = bookSlice.actions;
export default bookSlice.reducer;
