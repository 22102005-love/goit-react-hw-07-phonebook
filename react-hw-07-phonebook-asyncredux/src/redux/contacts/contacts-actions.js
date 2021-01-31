import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('FETCHCONTACTREQUEST');
export const fetchContactsSuccess = createAction('FETCHCONTACTSUCCESS');
export const fetchContactsError = createAction('FETCHCONTACTERROR');

export const addContactRequest = createAction('ADDCONTACTREQUEST');
export const addContactSuccess = createAction('ADDCONTACTSUCCESS');
export const addContactError = createAction('ADDCONTACTERROR');

export const removeContactRequest = createAction('REMOVECONTACTREQUEST');
export const removeContactSuccess = createAction('REMOVECONTACTSUCCESS');
export const removeContactError = createAction('REMOVECONTACTERROR');

export const filterChange = createAction('CHANGE_FILTER');
