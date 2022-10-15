import styled from 'styled-components';
import { BookList, Filters, Loading, Sort } from '../components';
import { useBooksContext } from '../context/BooksContext';

const BooksPage = () => {
  const { booksLoading: loading, books } = useBooksContext();

  if (loading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <main>
      <Wrapper className="section">
        <div className="options">
          <Sort />
          <Filters />
        </div>
        <BookList books={books} />
      </Wrapper>
    </main>
  );
};

const LoadingWrapper = styled.div`
  min-height: calc(100vh - var(--navbar-height));

  display: grid;
  place-items: center;
`;

const Wrapper = styled.div`
  min-height: calc(100vh - (var(--navbar-height)) - 8rem);
  margin: 4rem auto;

  .options {
    display: flex;
    padding: 1rem;
    color: var(--color-brown-2);
    background-color: var(--color-red-1);
    border-radius: var(--radius);
  }
`;

export default BooksPage;
