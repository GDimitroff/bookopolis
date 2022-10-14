import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../utils/actions';

const globalReducer = (state, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR: {
      return { ...state };
    }
    case CLOSE_SIDEBAR: {
      return { ...state };
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default globalReducer;
