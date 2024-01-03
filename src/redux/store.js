import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reduser';

export const store = configureStore({
  reducer: rootReducer,
});