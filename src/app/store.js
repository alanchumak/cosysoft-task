import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import jokesReducer from '../features/jokes/jokesSlice';
import watchfetchJokes from './sagas'
import createSagaMiddleware from 'redux-saga'

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    jokes: jokesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
});

saga.run(watchfetchJokes)
