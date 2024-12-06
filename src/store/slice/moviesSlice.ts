import {createSlice} from '@reduxjs/toolkit';
import {getTopRatedMovies} from '../actions/moviesActions';
import {MoviesTypes} from '../../model/data/moviesTypes';
import {PayloadAction} from '@reduxjs/toolkit';

const initialState: MoviesTypes = {
  pending: false,
  movies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTopRatedMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action: PayloadAction) => {
        state.movies = action.payload;
      });
  },
});
export default moviesSlice.reducer;
