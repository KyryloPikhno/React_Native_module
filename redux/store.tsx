import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {charactersReducer} from './character.slice';

const rootReducer = combineReducers({
  charactersReducer,
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export {setupStore};
