import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

import store from './redux/store';
// import { myAction } from './redux/actions';
import 'modern-normalize/modern-normalize.css';
import './styles.css';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loadings={null} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
