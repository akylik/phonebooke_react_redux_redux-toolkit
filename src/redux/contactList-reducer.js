import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../redux/contactList-action';
// import actionTypes from '../redux/contactList-types';
// import { combineReducers } from 'redux';

const contactListInitialState = {
  contacts: [],
};

export const contactListReducer = createReducer(contactListInitialState, {
  [actions.addContact]: (state, { payload }) => {
    const { name } = payload;
    const isFinded = state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (isFinded) {
      alert('Контакт уже есть в списке !');
      return state;
    }
    return { contacts: [payload, ...state.contacts] };
  },
  [actions.deleteContact]: (state, { payload }) => ({
    contacts: state.contacts.filter(contact => contact.id !== payload),
  }),
});

const filterInitialState = {
  filter: '',
};

export const filterReducer = createReducer(filterInitialState, {
  [actions.filteredContact]: (state, { payload }) => ({
    //   [actionTypes.FILTER_CONTACT]: (state, { payload }) => ({
    filter: payload,
  }),
});

//---with out reduxjs toolkit---

// export const contactListReducer = (
//   state = contactListInitialState,
//   { type, payload },
// ) => {
//   switch (type) {
//     case actionTypes.ADD_CONTACT:
//    //  case 'ADD_CONTACT':
//       const { name } = payload;
//       const isFinded = state.contacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase(),
//       );
//       if (isFinded) {
//         alert('Контакт уже есть в списке !');
//         return state;
//       }
//       return { contacts: [payload, ...state.contacts] };
//     case actionTypes.DELETE_CONTACT:
//       return {
//         contacts: state.contacts.filter(contact => contact.id !== payload),
//       };
//     default:
//       return state;
//   }
// };

// export const filterReducer = (state = filterInitialState, { type, payload }) => {
//   switch (type) {
//     case actionTypes.FILTER_CONTACT:
//    //  case 'FILTER_CONTACT':
//       return {
//         filter: payload,
//       };
//     default:
//       return state;
//   }
// };

//----- with combineReducers

// export default combineReducers({
//   contacts: contactListReducer,
//   filter: filterReducer,
// });
