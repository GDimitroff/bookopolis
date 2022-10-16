import styled from 'styled-components';
import { BookList, Options, Loading } from '../components';
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
        <Options />
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
`;

export default BooksPage;
