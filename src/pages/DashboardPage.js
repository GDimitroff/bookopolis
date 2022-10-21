import styled from 'styled-components';

import { useBooksContext } from '../context/BooksContext';

const DashboardPage = () => {
  const { userLoading, booksLoading, addedBooks, favoriteBooks } =
    useBooksContext();

  if (booksLoading || userLoading) {
    return (
      <Wrapper className="section">
        <h5>Зареждане...</h5>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="section">
      <h2>Читателски дневник</h2>
      <div className="added-books">
        <h3>Прочетени</h3>
        {addedBooks.map((book) => {
          return (
            <article key={book.id}>
              <h4>{book.title}</h4>
            </article>
          );
        })}
      </div>
      <div className="favorite-books">
        <h3>Любими</h3>
        {favoriteBooks.map((book) => {
          return (
            <article key={book.id}>
              <h4>{book.title}</h4>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - var(--navbar-height) - 8rem);
  margin: 4rem auto;

  .added-books,
  .favorite-books {
    margin-top: 2rem;
  }
`;

export default DashboardPage;
