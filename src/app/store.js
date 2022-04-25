import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import jokesReducer from '../features/jokes/jokesSlice';
import watchfetchJokes from './sagas'
import createSagaMiddleware from 'redux-saga'

const saga = createSagaMiddleware()

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}

export const store = configureStore({
  reducer: {
    jokes: jokesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
  preloadedState: persistedState
});

saga.run(watchfetchJokes)

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
