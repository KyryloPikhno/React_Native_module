import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchCharacter} from '../services/character.service';
import {IInitialState} from '../interfaces/interfaces';

const initialState: IInitialState = {
  characters: [],
  loading: false,
  error: null,
};

export const getAll = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    const {data} = await fetchCharacter();
    return data;
  },
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAll.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch characters.';
      });
  },
});

const {reducer: charactersReducer} = charactersSlice;

const charactersActions = {
  getAll,
};

export {charactersReducer, charactersActions};
