import styled from 'styled-components';

import { useBooksContext } from '../context/BooksContext';
import { useFiltersContext } from '../context/FiltersContext';
import GridView from './GridView';
import ListView from './ListView';

const BookList = () => {
  const { booksLoading: loading, booksError: error } = useBooksContext();
  const { filteredBooks: books, gridView } = useFiltersContext();

  if (loading) {
    return <Wrapper>Loading...</Wrapper>;
  }

  if (error) {
    return <Wrapper>Error...</Wrapper>;
  }

  if (gridView === false) {
    return <ListView books={books} />;
  }

  return <GridView books={books} />;
};

const Wrapper = styled.section``;

export default BookList;
