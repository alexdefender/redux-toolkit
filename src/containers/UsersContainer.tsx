import { FC, useEffect } from 'react';
import useAppSelector from '../hooks/useAppSelector';
import useAppDispatch from '../hooks/useAppDispatch';
import { getUsers } from '../actions/users';

const UsersContainer: FC = (): JSX.Element => {
  const { list, isLoading, error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers({ limit: 7 }));
  }, []);

  return (
    <div className="list">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}

      {!isLoading &&
        !error &&
        list.map((user) => (
          <div key={user.id} className="user__item">
            {JSON.stringify(user)}
          </div>
        ))}
    </div>
  );
};

export default UsersContainer;
