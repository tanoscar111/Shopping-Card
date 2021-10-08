import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  posts: [],
}
const postsReducer = createSlice({
  name: "GET_Post",
 
  reducers: {
    fetchData: (state=initialState, action) => {
     
      const userData = action.payload;
      return {
        ...state,
        posts: [...userData],
      };
    },
  },
});
export const { fetchData } = postsReducer.actions;
export default postsReducer.reducer;
