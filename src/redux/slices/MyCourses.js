import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  courses: [],
};
export const MyCoursesSlice = createSlice({
  name: 'MyCourses',
  initialState: initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = [...state.courses, action.payload]; //adding courses to reducer appending after existing added courses
    },
  },
});
export const {setCourses} = MyCoursesSlice.actions;
export default MyCoursesSlice.reducer;
