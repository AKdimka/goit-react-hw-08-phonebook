import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authReducer } from './auth';
import { contactsReducer } from "./contacts";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};

const middleware = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
];

export const store = configureStore({
	reducer: {
		auth: persistReducer(persistConfig, authReducer),
		contacts: contactsReducer,
	},

	middleware,
	devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);