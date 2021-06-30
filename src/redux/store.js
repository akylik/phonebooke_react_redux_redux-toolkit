import { configureStore, combineReducers } from '@reduxjs/toolkit';
import * as rootReducer from '../redux/contactList-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, combineReducers } from 'redux';


const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    contacts: rootReducer.contactListReducer,
    filter: rootReducer.filterReducer,
  }),
);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default {store, persistor};

//------------- with combineReducers, createStore, composeWithDevTools 

// const initialState = {
//   contacts: [],
//   filter: '',
// };

// const reducer = (state = initialState, { type, payload }) => {
//   //   console.log('Лог экшена в reducer: ', action);
//   switch (type) {
//     case 'ADD_CONTACT':
//       const { name } = payload;
//       const isFinded = state.contacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase(),
//       );
//       if (isFinded) {
//         alert('Контакт уже есть в списке !');
//         return state;
//       }
//       return { ...state, contacts: [payload, ...state.contacts] };
//     case 'DELETE_CONTACT':
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== payload),
//       };
//     case 'FILTER_CONTACT':
//       return {
//         ...state,
//         filter: payload,
//       };
//     default:
//       return state;
//   }
// };


// const contactListInitialState = {
//   contacts: [],
// };

// const contactListReducer = (state = contactListInitialState, { type, payload }) => {
//   switch (type) {
//     case 'ADD_CONTACT':
//       const { name } = payload;
//       const isFinded = state.contacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase(),
//       );
//       if (isFinded) {
//         alert('Контакт уже есть в списке !');
//         return state;
//       }
//       return { contacts: [payload, ...state.contacts] };
//     case 'DELETE_CONTACT':
//       return {
//         contacts: state.contacts.filter(contact => contact.id !== payload),
//       };
//     default:
//       return state;
//   }
// };

// const filterInitialState = {
//   filter: '',
// };

// const filterReducer = (state = filterInitialState, { type, payload }) => {
//   switch (type) {
//     case 'FILTER_CONTACT':
//       return {
//         filter: payload,
//       };
//     default:
//       return state;
//   }
// };

// const reducer = (state = initialState, { type, payload }) => {
//   //   console.log('Лог экшена в reducer: ', action);
//   switch (type) {
//     case 'ADD_CONTACT':
//       const { name } = payload;
//       const isFinded = state.contacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase(),
//       );
//       if (isFinded) {
//         alert('Контакт уже есть в списке !');
//         return state;
//       }
//       return { ...state, contacts: [payload, ...state.contacts] };
//     case 'DELETE_CONTACT':
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== payload),
//       };
//     case 'FILTER_CONTACT':
//       return {
//         ...state,
//         filter: payload,
//       };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   contacts: contactListReducer,
//   filter: filterReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
// const store = createStore(reducer, composeWithDevTools());


