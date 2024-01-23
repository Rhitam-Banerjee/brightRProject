/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eee",
        highlight: "#3B72FF",
        blueLightColor: "#EDF2FF",
        purpleLightColor: "#FCF2FF",
        beigeLightColor: "#FFF4ED",
        greenLightColor: "#E9FDF7",
        gradientStop1: "#EBFFFA",
        gradientStop2: "#E0ECFF",
        gradientStop3: "#F9F2FF",
      },
      aspectRatio: {
        "7/8": "7 / 8",
      },
      screens: {
        xs: { max: "450px" },
        md: { max: "640px" },
        lg: { max: "1130px" },
      },
    },
  },
  plugins: [],
};
