import { combineReducers } from 'redux';
import * as actions from './contacts-actions.js';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, action) => action.payload,
  [actions.addContactSuccess]: (state, action) => [...state, action.payload],
  [actions.removeContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});
const filter = createReducer('', {
  [actions.filterChange]: (_, action) => action.payload,
});
export default combineReducers({
  items,
  filter,
});
