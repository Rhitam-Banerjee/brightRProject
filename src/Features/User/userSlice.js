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
import {
  aliens,
  badSeed,
  csugar,
  davidTrouble,
  dinoCatch,
  dlove,
  ilove,
  pyoga,
  sboy,
  spacebooks,
} from "../../assets";
const initialState = {
  activePage: "Home",
  menuItems: [
    {
      title: "Home",
      link: "/brightRProject/",
    },
    {
      title: "Browse Library",
      link: "/brightRProject/browseLibrary",
    },
    {
      title: "Blogs",
      link: "/brightRProject/blogs",
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
      bgColor: "#FFF4ED",
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
      bgColor: "#E9FDF7",
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
      bgColor: "#EDF2FF",
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
      bgColor: "#FCF2FF",
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
      bgColor: "#FFF4ED",
    },
    {
      title: "Aliens love Dinopants",
      image: aliens,
      desc: "All mamma wants on her special day is a little bit of peace, love, and cleanliness...",
      rating: "4.3",
      peopleRead: 1234,
      age: "0-2",
      isNewArrival: true,
      link: "https://www.amazon.in/",
      bgColor: "#E9FDF7",
    },
    {
      title: "The Bad Seed",
      image: badSeed,
      desc: "All mamma wants on her special day is a little bit of peace, love, and cleanliness...",
      rating: "4.3",
      peopleRead: 1234,
      age: "0-2",
      isNewArrival: true,
      link: "https://www.amazon.in/",
      bgColor: "#EDF2FF",
    },
    {
      title: "Book About Space",
      image: spacebooks,
      desc: "All mamma wants on her special day is a little bit of peace, love, and cleanliness...",
      rating: "4.3",
      peopleRead: 1234,
      age: "0-2",
      isNewArrival: true,
      link: "https://www.amazon.in/",
      bgColor: "#FCF2FF",
    },
    {
      title: "How to Catch a Dinosaur",
      image: dinoCatch,
      desc: "All mamma wants on her special day is a little bit of peace, love, and cleanliness...",
      rating: "4.3",
      peopleRead: 1234,
      age: "0-2",
      isNewArrival: true,
      link: "https://www.amazon.in/",
      bgColor: "#FFF4ED",
    },
    {
      title: "David Gets in Trouble",
      image: davidTrouble,
      desc: "All mamma wants on her special day is a little bit of peace, love, and cleanliness...",
      rating: "4.3",
      peopleRead: 1234,
      age: "0-2",
      isNewArrival: true,
      link: "https://www.amazon.in/",
      bgColor: "#E9FDF7",
    },
  ],
  ageArr: ["0-1", "1-3", "3-6", "6-9", "9-12", "12+"],
  childArr: [zeroChild, threeChil, nineChil, twelChil],
  isLoggedin: false,
  delivery: new Date().toISOString(true).split("T")[0],
  footer: {
    list1: [
      {
        title: "About Us",
        link: "/brightRProject/blogs",
      },
      {
        title: "Contact Us",
        link: "/brightRProject/blogs",
      },
      {
        title: "FAQ",
        link: "/brightRProject/blogs",
      },
    ],
    list2: [
      {
        title: "Disclaimer",
        link: "/brightRProject/blogs",
      },
      {
        title: "Privacy Policy",
        link: "/brightRProject/blogs",
      },
      {
        title: "Refund Policy",
        link: "/brightRProject/blogs",
      },
      {
        title: "Terms and Conditions",
        link: "/brightRProject/blogs",
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
