import { combineReducers } from 'redux';

import group from './group';
import user from './user';

const rootReducer = combineReducers({
  group,
  user
});

export default rootReducer;