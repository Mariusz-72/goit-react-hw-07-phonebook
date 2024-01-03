import { combineReducers } from '@reduxjs/toolkit';

import { contactsReducer } from './Contacts/contacts-slice';
import { filterReducer } from './Filter/filter-slice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

