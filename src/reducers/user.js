import {
  USER_REGISTER,
  USER_LOGIN
} from '../actions/user';

const defaultState = {
  me: {},
  token: null
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return { ...state, me: action.me };
    case USER_LOGIN:
      return { ...state, token: action.token }; 
    default:
      return state;
  }
};

export default user;