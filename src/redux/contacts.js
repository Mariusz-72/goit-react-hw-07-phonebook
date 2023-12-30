import { createReducer, createAction } from '@reduxjs/toolkit';

export const saveContact = createAction('contacts/save');
export const deleteContact = createAction('contacts/delete');
export const loadContacts = createAction('contacts/loadContacts');

const initialState = [];

const contactsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loadContacts, (state, action) => action.payload)
        .addCase(saveContact, (state, action) => [...state, action.payload])
        .addCase(deleteContact, (state, action) =>
            state.filter(contact => contact.id !== action.payload)
        );
});

export default contactsReducer;
