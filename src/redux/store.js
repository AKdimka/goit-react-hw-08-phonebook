import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

//import initialContacts from '../components/contacts.json'

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: { items: [], filter: '' },
	reducers: {
		addContact({ items }, { payload }) {
			items.unshift(payload)
		},
		deliteContact({ items }, { payload }) {
			return items.filter(contact => contact.id !== payload);
		},
		filtredContacts(state, { payload }) {
			state.filter = payload;
		}
	}
});
export const { addContact, deliteContact, filtredContacts } = contactsSlice.actions;

export const store = configureStore({
	reducer: {
		contacts: contactsSlice.reducer,
	}
})