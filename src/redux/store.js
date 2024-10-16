import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import searchFilterReducer from "./filtersSlice";
import { authSlice } from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: searchFilterReducer,
    auth: authSlice,
  },
});
