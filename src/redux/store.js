// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contacts';
// import filtersReducer from './filters';

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filtersReducer,
//   },
// });

// export default store;
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reduser';

export const store = configureStore({
  reducer: rootReducer,
});