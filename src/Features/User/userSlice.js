import { createSlice } from "@reduxjs/toolkit";
import { csugar, dlove, ilove, pyoga, sboy } from "../../assets";

const initialState = {
  activePage: "Home",
  menuItems: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Browse Library",
      link: "/browseLibrary",
    },
    {
      title: "Blogs",
      link: "/blogs",
    },
  ],
  heroCarousel: [
    {
      title: "There's Coriander in my Sugar Pot!",
      image: csugar,
      desc: "All mamma wants on her special day is a little bit of peace, love, and cleanliness...",
      rating: "4.3",
      peopleRead: 1234,
      age: "3-6",
      isNewArrival: true,
      link: "https://www.amazon.in/",
    },
    {
      title: "Space Boy",
      image: sboy,
      desc: "All mamma wants on her special day is a little bit of peace, love, and cleanliness...",
      rating: "4.3",
      peopleRead: 1234,
      age: "3-6",
      isNewArrival: false,
      link: "https://www.amazon.in/",
    },
    {
      title: "I Love My New Toy!",
      image: ilove,
      desc: "All mamma wants on her special day is a little bit of peace, love, and cleanliness...",
      rating: "4.3",
      peopleRead: 1234,
      age: "0-2",
      isNewArrival: false,
      link: "https://www.amazon.in/",
    },
    {
      title: "Dinosaur Love Underpants",
      image: dlove,
      desc: "All mamma wants on her special day is a little bit of peace, love, and cleanliness...",
      rating: "4.3",
      peopleRead: 1234,
      age: "3-6",
      isNewArrival: false,
      link: "https://www.amazon.in/",
    },
    {
      title: "Peppa Loves Yoga",
      image: pyoga,
      desc: "All mamma wants on her special day is a little bit of peace, love, and cleanliness...",
      rating: "4.3",
      peopleRead: 1234,
      age: "0-2",
      isNewArrival: true,
      link: "https://www.amazon.in/",
    },
  ],
  isLoggedin: false,
  delivery: new Date().toISOString(true).split("T")[0],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginout: (state) => {
      state.isLoggedin = !state.isLoggedin;
    },
    setActive: (state, { payload }) => {
      state.activePage = payload;
    },
    changeDelivery: (state, { payload }) => {
      state.delivery = payload.date;
    },
  },
});
export const { loginout, setActive, changeDelivery } = userSlice.actions;
export default userSlice.reducer;
