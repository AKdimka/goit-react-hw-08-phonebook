import { createSlice } from "@reduxjs/toolkit";

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

export const contactsReducer = contactsSlice.reducer

// Selectors

export const getFilter = state => state.contacts.filter;

export const getContacts = state => state.contacts.items;