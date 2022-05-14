import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

//import initialContacts from '../components/contacts.json'

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: { items: [], filter: '', obj: {} },
	reducers: {
		addContact(state, { payload }) {
			state.items = [payload, ...state.items]
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

export const store = configureStore({
	reducer: {
		contacts: contactsSlice.reducer,
	}
})