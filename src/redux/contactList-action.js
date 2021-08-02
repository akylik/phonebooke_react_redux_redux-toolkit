import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
// import actionTypes from '../redux/contactList-types';

export const addContact = createAction('ADD_CONTACT', data => ({
  payload: {
    id: shortid.generate(),
    name: data.name,
    number: data.number,
  },
}));

export const deleteContact = createAction('DELETE_CONTACT');

export const filteredContact = createAction('FILTER_CONTACT');
// export const filteredContact = createAction(actionTypes.FILTER_CONTACT);


// export const addContact = ({ name, number }) => ({
//   type: actionTypes.ADD_CONTACT,
// //   type: 'ADD_CONTACT',
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

// export const deleteContact = contactId => ({
//   type: actionTypes.DELETE_CONTACT,
// //   type: 'DELETE_CONTACT',
//   payload: contactId,
// });

// export const filteredContact = value => ({
//   type: actionTypes.FILTER_CONTACT,
// //   type: 'FILTER_CONTACT',
//   payload: value,
// });
