import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPost } from '../models/IPost';

interface PostsState {
  list: IPost[];
  isLoading: boolean;
  error: string;
}

const initialState: PostsState = {
  list: [],
  isLoading: false,
  error: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsStart(state) {
      state.isLoading = true;
    },
    getPostsSuccess(state, action: PayloadAction<IPost[]>) {
      state.isLoading = false;
      state.error = '';
      state.list = action.payload;
    },
    getPostsError(state, action: PayloadAction<string>) {
      state.isLoading = true;
      state.error = action.payload;
    },
  },
});

export const { getPostsStart, getPostsSuccess, getPostsError } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
