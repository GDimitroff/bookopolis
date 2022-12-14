import React, { useEffect, useContext, useReducer } from 'react';

import { useAuthContext } from './AuthContext';
import { useBooksContext } from './BooksContext';
import {
  LOAD_BOOKS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_FILTERS,
  FILTER_BOOKS,
  UPDATE_SORT,
  SORT_BOOKS,
  RESET_FILTERS,
} from '../utils/actions';
import filtersReducer from '../reducers/filtersReducer';

const initialState = {
  allBooks: [],
  filteredBooks: [],
  gridView: true,
  sort: 'name-a',
  filters: {
    grade: 'all',
  },
};

const FiltersContext = React.createContext();

const FiltersProvider = ({ children }) => {
  const { user } = useAuthContext();
  const { books } = useBooksContext();
  const [state, dispatch] = useReducer(filtersReducer, initialState);

  useEffect(() => {
    if (!user) {
      dispatch({ type: RESET_FILTERS });
    }
  }, [user]);

  useEffect(() => {
    dispatch({ type: LOAD_BOOKS, payload: books });
  }, [books]);

  useEffect(() => {
    dispatch({ type: FILTER_BOOKS });
    dispatch({ type: SORT_BOOKS });
  }, [books, state.filters, state.sort]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateFilters = (e) => {
    const { name, value } = e.target;
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const updateSort = (e) => {
    const { value } = e.target;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  return (
    <FiltersContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateFilters,
        updateSort,
      }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};

export default FiltersProvider;
