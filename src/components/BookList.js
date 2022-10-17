import styled from 'styled-components';

import { useBooksContext } from '../context/BooksContext';
import { useFiltersContext } from '../context/FiltersContext';
import GridView from './GridView';
import ListView from './ListView';
import Loading from './Loading';

const BookList = () => {
  const { booksLoading: loading, booksError: error } = useBooksContext();
  const { filteredBooks: books, gridView } = useFiltersContext();

  if (loading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  if (error) {
    return <h5>Възникна грешка! Моля, опитайте отново.</h5>;
  }

  if (gridView === false) {
    return <ListView books={books} />;
  }

  return <GridView books={books} />;
};

const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default BookList;
