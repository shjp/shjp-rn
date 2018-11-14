import { combineReducers } from 'redux';

import announcement from './announcement';
import event from './event';
import group from './group';
import user from './user';

const rootReducer = combineReducers({
  announcement,
  event,
  group,
  user
});

export default rootReducer;