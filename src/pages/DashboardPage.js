import styled from 'styled-components';

import { useBooksContext } from '../context/BooksContext';
import { FavoriteBooks, ReadBooks } from '../components';

const DashboardPage = () => {
  const {
    userLoading,
    booksLoading,
    addedBooks,
    favoriteBooks,
    removeFavoriteBook,
  } = useBooksContext();

  if (booksLoading || userLoading) {
    return (
      <Wrapper className="section">
        <h5>Зареждане...</h5>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="section">
      <FavoriteBooks
        favoriteBooks={favoriteBooks}
        removeBook={removeFavoriteBook}
      />
      <ReadBooks readBooks={addedBooks} />
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
