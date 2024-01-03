import { getFilter } from 'Redux/Filter/filter-selectors';
import { createSelector } from '@reduxjs/toolkit';

export const getAllContacts = store => store.contacts.items;

export const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normalizedFilter);
    });
  }
);
