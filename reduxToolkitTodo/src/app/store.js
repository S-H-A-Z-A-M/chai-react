import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice.js";

export const store = configureStore({
  reducer: todoReducer,
});

// steps

// 1. import the configureStore
//
