import {
  GET_GROUPS
} from '../actions/group';

const getDefaultState = () => ({
  groups: []
});

const groupReducer = (state = getDefaultState(), action) => {
  switch (action.type) {
    case GET_GROUPS:
      return { ...state, groups: action.groups };
    default:
      return state;
  }
};

export default groupReducer;