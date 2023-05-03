import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../models/IUser';
import { getUsers } from '../actions/users';

interface UsersState {
  list: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UsersState = {
  list: [],
  isLoading: false,
  error: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = '';
      state.list = action.payload;
    },
    [getUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
