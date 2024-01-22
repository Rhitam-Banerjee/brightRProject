import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Features/User/userSlice";
import bookSlice from "./Features/Books/bookSlice";
import ageSlice from "./Features/Age/ageSlice";
const defaultMiddlewareConfig = {
  serializableCheck: {
    ignoredPaths: ["user.delivery"],
  },
};
const store = configureStore({
  reducer: {
    user: userSlice,
    books: bookSlice,
    age: ageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(defaultMiddlewareConfig),
});
export default store;
