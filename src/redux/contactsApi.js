import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
	reducerPath: 'contactsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://6284e4b7a48bd3c40b777f4a.mockapi.io/api/v1' }),
	tagTypes: ['contact'],
	endpoints: builder => ({
		getContactsList: builder.query({
			query: () => `/contacts`,
			providesTags: ['contact']
		}),
		creteContact: builder.mutation({
			query: newContact => ({
				url: '/contacts',
				method: 'POST',
				body: newContact,
			}),
			invalidatesTags: ['contact']
		}),
		deleteContact: builder.mutation({
			query: id => ({
				url: `/contacts/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['contact']
		})
	}),
})

export const { useGetContactsListQuery, useDeleteContactMutation, useCreteContactMutation } = contactsApi;