import React, { useContext, useReducer } from 'react';

import globalReducer from '../reducers/globalReducer';
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../utils/actions';

const initialState = {
  isSidebarOpen: false,
};

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const openSidebar = () => {
    console.log('open sidebar -> before dispatch');
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  return (
    <GlobalContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default GlobalProvider;
