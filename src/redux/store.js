import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsReducer } from "./contactsSlice";
import { contactsApi } from "./contactsApi";

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		[contactsApi.reducerPath]: contactsApi.reducer,
	},
	middleware: getDefaultMiddleware => [
		...getDefaultMiddleware(),
		contactsApi.middleware,],
});

setupListeners(store.dispatch)