import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {characterService} from '../services/character.service';
import {ICharacterResponse, IInitialState} from '../interfaces/interfaces';
import {AxiosResponse} from 'axios';

const initialState: IInitialState = {
  characters: [],
  loading: false,
  error: null,
};

export const getAll = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    const response: AxiosResponse<ICharacterResponse> =
      await characterService.getAll();
    console.log(response.data.results);
    return response.data.results;
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
