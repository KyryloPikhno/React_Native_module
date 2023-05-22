import {configureStore} from '@reduxjs/toolkit';
import {charactersReducer} from './character.slice';

const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

export {store};
