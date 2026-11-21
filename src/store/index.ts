import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import inquiryReducer from "@/features/inquiry/inquirySlice";

export const makeStore = () =>
  configureStore({
    reducer: { auth: authReducer, inquiry: inquiryReducer },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
