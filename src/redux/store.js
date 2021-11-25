import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducers from './contacts-reducer';

const store = configureStore({
  reducer: contactsReducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

// import { composeWithDevTools } from 'redux-devtools-extension';

// import contactsReducer from './contacts-reducer';

// const persistedState = localStorage.getItem('reduxState')
//   ? JSON.parse(localStorage.getItem('reduxState'))
//   : {};

// const store = createStore(
//   contactsReducer,
//   persistedState,
//   composeWithDevTools(),
// );

// store.subscribe(() => {
//   localStorage.setItem('reduxState', JSON.stringify(store.getState()));
// });

// export default store;
