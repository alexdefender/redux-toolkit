import axios from 'axios';
import { IUser } from '../models/IUser';
import { createAsyncThunk } from '@reduxjs/toolkit';

const USERS_API = 'https://jsonplaceholder.typicode.com/users';

type Parameters = {
  limit?: number;
};

export const getUsers = createAsyncThunk('users/getAll', async ({ limit = 5 }: Parameters, thunkAPI) => {
  const params = { _limit: limit };

  return axios
    .get<IUser[]>(USERS_API, { params })
    .then(({ data }) => data)
    .catch((e) => thunkAPI.rejectWithValue(e.message));
});
