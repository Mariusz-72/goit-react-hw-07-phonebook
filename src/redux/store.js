import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts';
import filtersReducer from './filters';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export default store;
