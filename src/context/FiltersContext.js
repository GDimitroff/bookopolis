import React, { useEffect, useContext, useReducer } from 'react';

import { useBooksContext } from './BooksContext';
import filtersReducer from '../reducers/filtersReducer';
import {
  LOAD_BOOKS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_BOOKS,
  UPDATE_FILTERS,
  FILTER_BOOKS,
} from '../utils/actions';

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
  const { books } = useBooksContext();
  const [state, dispatch] = useReducer(filtersReducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_BOOKS, payload: books });
  }, [books]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  return (
    <FiltersContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
      }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};

export default FiltersProvider;
