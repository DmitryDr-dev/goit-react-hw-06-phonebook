import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact');
const deleteContact = createAction('contacts/deleteContact');
const changeFilter = createAction('contacts/changeFilter');

const contactsActions = { addContact, deleteContact, changeFilter };

export default contactsActions;

// import types from './contacts-types';
// export const addContact = newContact => ({
//   type: types.ADD,
//   payload: newContact,
// });

// export const deleteContact = toDeleteId => ({
//   type: types.DELETE,
//   payload: toDeleteId,
// });

// export const changeFilter = value => ({
//   type: types.FILTER,
//   payload: value,
// });
