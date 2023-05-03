import * as usersActions from './users';
import * as postsActions from './posts';

const actionCreators = {
  ...usersActions,
  ...postsActions,
};

export default actionCreators;
