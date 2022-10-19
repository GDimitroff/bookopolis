import {
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from '../utils/actions';

const autReducer = (state, action) => {
  switch (action.type) {
    case GET_USER_LOADING: {
      return {
        ...state,
        userLoading: true,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        userLoading: false,
        user: action.payload,
      };
    }
    case GET_USER_ERROR: {
      return { ...state, userLoading: false, userError: true };
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default autReducer;
