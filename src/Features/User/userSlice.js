import { createSlice } from "@reduxjs/toolkit";
// import { csugar, dlove, ilove, pyoga, sboy } from "../../assets";
import {
  zeroChild,
  threeChil,
  nineChil,
  twelChil,
  insta,
  x,
  f,
} from "../../assets";
const initialState = {
  isMobile: false,
  activePage: "Home",
  menuItems: [
    {
      title: "Home",
      link: "/brightRProject/",
    },
    {
      title: "Library",
      link: "/brightRProject/browseLibrary",
    },
    {
      title: "Genere",
      link: "/brightRProject/genere",
    },
    {
      title: "Series",
      link: "/brightRProject/series",
    },
    {
      title: "Must Read",
      link: "/brightRProject/mustRead",
    },
  ],
  bgColorArray: ["#FFF4ED", "#E9FDF7", "#EDF2FF", "#FCF2FF"],
  childArr: [zeroChild, threeChil, nineChil, twelChil],
  isLoggedin: false,
  delivery: new Date().toISOString(true).split("T")[0],
  footer: {
    list1: [
      {
        title: "About Us",
        link: "/brightRProject",
      },
      {
        title: "Contact Us",
        link: "/brightRProject",
      },
      {
        title: "FAQ",
        link: "/brightRProject",
      },
    ],
    list2: [
      {
        title: "Disclaimer",
        link: "/brightRProject",
      },
      {
        title: "Privacy Policy",
        link: "/brightRProject",
      },
      {
        title: "Refund Policy",
        link: "/brightRProject",
      },
      {
        title: "Terms and Conditions",
        link: "/brightRProject",
      },
    ],
    list3: [
      {
        title: "X",
        image: x,
        link: "https://twitter.com/",
      },
      {
        title: "Facebook",
        image: f,
        link: "https://www.facebook.com/",
      },
      {
        title: "Instagram",
        image: insta,
        link: "https://instagram.com/",
      },
    ],
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setisMobileDevice: (state, { payload }) => {
      state.isMobile = payload;
    },
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
export const { setisMobileDevice, loginout, setActive, changeDelivery } =
  userSlice.actions;
export default userSlice.reducer;
