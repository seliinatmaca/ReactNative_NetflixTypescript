import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verb';
import {TOP_RATED_URL} from '../../service/url';

export const getTopRatedMovies = createAsyncThunk('', async () => {
  const response = await getRequest(TOP_RATED_URL, {});
  return response.data;
});
