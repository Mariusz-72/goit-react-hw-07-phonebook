import { createReducer, createAction } from '@reduxjs/toolkit';

export const setFilter = createAction('filters/set');

const filtersReducer = createReducer('', builder => {
    builder.addCase(setFilter, (_, action) => action.payload);
});

export default filtersReducer;
