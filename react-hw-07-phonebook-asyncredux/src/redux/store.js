import contactsReducer from './contacts/contacts-reducer.js';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: true,
});
export default store;
