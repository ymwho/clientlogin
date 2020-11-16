import { USER_LOGIN, USER_SIGNUP, USER_AUTH } from '../Action/Type';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_LOGIN: {
      return { ...state, loginUser: action.payload };
    }

    case USER_SIGNUP: {
      return { ...state, createUser: action.payload };
    }
    case USER_AUTH: {
      return { ...state, userData: action.payload };
    }

    default:
      return state;
  }
}
