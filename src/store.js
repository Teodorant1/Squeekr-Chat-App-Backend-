import { configureStore } from "@reduxjs/toolkit";
import targetslice from "./targetslice";
export default configureStore({
  reducer: {
    target: targetslice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
