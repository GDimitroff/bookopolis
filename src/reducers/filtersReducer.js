import {
  LOAD_BOOKS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_BOOKS,
  UPDATE_FILTERS,
  FILTER_BOOKS,
} from '../utils/actions';

const filtersReducer = (state, action) => {
  switch (action.type) {
    case LOAD_BOOKS: {
      return {
        ...state,
        allBooks: [...action.payload],
        filteredBooks: [...action.payload],
      };
    }
    case SET_GRIDVIEW: {
      return {
        ...state,
        gridView: true,
      };
    }
    case SET_LISTVIEW: {
      return {
        ...state,
        gridView: false,
      };
    }
    case UPDATE_FILTERS: {
      let { name, value } = action.payload;

      if (name === 'grade') {
        if (value !== 'all') {
          value = Number(value);
        }
      }

      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };
    }
    case FILTER_BOOKS: {
      const { allBooks } = state;
      const { grade } = state.filters;

      let filteredBooks = [...allBooks];

      if (grade !== 'all') {
        filteredBooks = filteredBooks.filter((p) => {
          return p.grade.includes(grade);
        });
      }

      return { ...state, filteredBooks };
    }
    case UPDATE_SORT: {
      return {
        ...state,
        sort: action.payload,
      };
    }
    case SORT_BOOKS: {
      const { sort, filteredBooks } = state;
      let sortedBooks = [...filteredBooks];

      if (sort === 'name-a') {
        sortedBooks = sortedBooks.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      }

      if (sort === 'name-z') {
        sortedBooks = sortedBooks.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      }

      return { ...state, filteredBooks: sortedBooks };
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default filtersReducer;
