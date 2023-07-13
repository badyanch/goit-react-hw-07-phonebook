import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64afd759c60b8f941af4b89e.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  refetchOnFocus: true,
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: data => ({
        url: 'contacts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
