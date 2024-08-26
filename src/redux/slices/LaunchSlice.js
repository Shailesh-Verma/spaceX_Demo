import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLaunches = createAsyncThunk('launches/fetchLaunches', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/launches');
  console.log(response)
  return response.data;
});

const LaunchSlice = createSlice({
  name: 'launches',
  initialState: {
    upcoming: [],
    previous: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLaunches.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLaunches.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.upcoming = action.payload.filter(launch => launch.upcoming);
        state.previous = action.payload.filter(launch => !launch.upcoming);
      })
      .addCase(fetchLaunches.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default LaunchSlice.reducer;
