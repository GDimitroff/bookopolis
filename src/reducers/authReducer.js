import {
  BOOK_LOADING,
  USER_LOADING,
  USER_SIGN_IN,
  USER_SIGN_OUT,
} from '../utils/actions';

const autReducer = (state, action) => {
  switch (action.type) {
    case USER_LOADING: {
      return {
        ...state,
        userLoading: true,
      };
    }
    case USER_SIGN_IN: {
      return {
        ...state,
        userLoading: false,
        user: action.payload,
      };
    }
    case USER_SIGN_OUT: {
      return { ...state, userLoading: false, user: null };
    }
    case BOOK_LOADING: {
      return {
        ...state,
        bookLoading: true,
      };
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default autReducer;
