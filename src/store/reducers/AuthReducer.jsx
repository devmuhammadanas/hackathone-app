import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  GET_USER_ON_AUTH_STATE_CHANGE,
} from "../type/Type";

const initialState = {
  isUserLoggedIn: false,
  user: {},
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isUserLoggedIn: true,
        user: action.payload,
      };
    }
    case SIGNUP: {
      return {
        ...state,
        isUserLoggedIn: true,
        userData: action.payload,
      };
    }
    case GET_USER_ON_AUTH_STATE_CHANGE: {
      // console.log('auth reduer get', action.payload);
      return {
        ...state,
        isUserLoggedIn: true,
        user: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isUserLoggedIn: false,
        user: {},
      };
    }

    default:
      return state;
  }
};
