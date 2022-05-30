import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: { filter: '' },

	reducers: {
		changeFilter(state, { payload }) {
			state.filter = payload;
		}
	}
});
export const { changeFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// Selectors

export const getFilter = state => state.contacts;