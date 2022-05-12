import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import initialContacts from '../components/contacts.json'

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: initialContacts,
	reducers: {
		addContact(state, { payload }) {
			state.unshift(payload)
		},
		deliteContact(state, { payload }) {
			return state.filter(contact => contact.id !== payload)
		},
		/* filtredContacts(state, action) {
			const visibleContacts = [];
			const normalizefFilter = action.payload.toLowerCase();
			console.log(normalizefFilter);
			visibleContacts.push(state.filter(contact => contact.name.toLowerCase().includes(normalizefFilter)))
			console.log(visibleContacts);
			return visibleContacts;
		} */
	}
})
export const { addContact, deliteContact, /* filtredContacts */ } = contactsSlice.actions;

const filterSlice = createSlice({
	name: 'filter',
	initialState: initialContacts,
	reducer: {
		changeFilter(state, { payload }) {
			const visibleContacts = [];
			const normalizefFilter = payload.toLowerCase();
			console.log(normalizefFilter);
			state.filter(contact => visibleContacts.push(contact.name.toLowerCase().includes(normalizefFilter)))
			console.log(visibleContacts);
			return visibleContacts;
		}
	}
})
export const { changeFilter } = filterSlice.actions;

export const store = configureStore({
	reducer: {
		items: contactsSlice.reducer,
		filter: filterSlice.reducer,
	}
})

