import { FC } from 'react';

import UsersContainer from './containers/UsersContainer';
import PostsContainer from './containers/PostsContainer';

const App: FC = (): JSX.Element => (
  <div className="main">
    <UsersContainer />
    <PostsContainer />
  </div>
);

export default App;
