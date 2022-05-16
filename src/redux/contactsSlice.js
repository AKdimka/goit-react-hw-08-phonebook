import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: { items: [], filter: '' },
	reducers: {
		addContact(state, { payload }) {
			state.items = [payload, ...state.items];
		},
		deliteContact(state, { payload }) {
			console.log(state.items);
			state.items = state.items.filter(contact => contact.id !== payload);
		},
		changeFilter(state, { payload }) {
			state.filter = payload;
		}
	}
});
export const { addContact, deliteContact, changeFilter } = contactsSlice.actions;

const persistConfig = {
	key: 'contacts',
	storage,
	whitelist: ['items'],
};

export const contactsReducer = persistReducer(
	persistConfig,
	contactsSlice.reducer,
);

// Selectors

export const getFilter = state => state.contacts.filter;

export const getContacts = state => state.contacts.items;