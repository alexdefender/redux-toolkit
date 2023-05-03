import { FC, useEffect } from 'react';
import useAppSelector from '../hooks/useAppSelector';
import useActions from '../hooks/useActions';

const PostsContainer: FC = (): JSX.Element => {
  const { list, isLoading, error } = useAppSelector((state) => state.posts);
  const { getPosts } = useActions();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="list">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}

      {!isLoading &&
        !error &&
        list.map((post) => (
          <div key={post.id} className="post__item">
            {JSON.stringify(post)}
          </div>
        ))}
    </div>
  );
};

export default PostsContainer;
