import { createSlice } from "@reduxjs/toolkit";
import authOperations from './auth-operations'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
};

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[authOperations.register.fulfilled](state, action) {
			console.log(3);
			console.log(action);
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		[authOperations.logIn.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		[authOperations.logOut.fulfilled](state, _) {
			state.user = { name: null, email: null };
			state.token = null;
			state.isLoggedIn = false;
		},

		[authOperations.fetchCurrentUser.fulfilled](state, action) {
			state.user = action.payload;
			state.isLoggedIn = true;
			state.isRefreshing = false;
		},
		[authOperations.fetchCurrentUser.pending](state) {
			state.isRefreshing = true;
		},
		[authOperations.fetchCurrentUser.rejected](state) {
			state.isRefreshing = false;
		},
	},
});

export const persisteAuthReducer = persistReducer(
	authPersistConfig,
	authSlice.reducer,
);