import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '../reducers/usersSlice';
import { postsReducer } from '../reducers/postsSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
