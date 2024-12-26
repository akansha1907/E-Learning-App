import {configureStore} from '@reduxjs/toolkit';
import MyCourses from './slices/MyCourses';
export const store = configureStore({
  reducer: {
    MyCourses: MyCourses,
  },
});
