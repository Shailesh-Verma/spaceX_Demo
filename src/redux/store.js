import { configureStore } from '@reduxjs/toolkit';
import launchesReducer from './slices/LaunchSlice';
import rocketsReducer from './slices/RocketSlice';

export const store = configureStore({
  reducer: {
    launches: launchesReducer,
    rockets: rocketsReducer,
  },
});
