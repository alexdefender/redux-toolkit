import axios from 'axios';
import { AppDispatch } from '../services/store';
import { IPost } from '../models/IPost';
import { getPostsStart, getPostsSuccess, getPostsError } from '../reducers/postsSlice';

const POSTS_API = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts =
  (limit: number = 5) =>
  async (dispatch: AppDispatch) => {
    dispatch(getPostsStart());

    const params = { _limit: limit };

    return axios
      .get<IPost[]>(POSTS_API, { params })
      .then(({ data }) => {
        dispatch(getPostsSuccess(data));
      })
      .catch((e) => {
        dispatch(getPostsError(e.message));
      });
  };
