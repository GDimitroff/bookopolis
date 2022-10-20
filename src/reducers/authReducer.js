import { USER_LOADING, USER_SIGN_IN, USER_SIGN_OUT } from '../utils/actions';

const autReducer = (state, action) => {
  switch (action.type) {
    case USER_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_SIGN_IN: {
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    }
    case USER_SIGN_OUT: {
      return { ...state, loading: false, user: null };
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default autReducer;
