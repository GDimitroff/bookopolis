import styled from 'styled-components';

import { useBooksContext } from '../context/BooksContext';
import { FavoriteBooks, ReadBooks } from '../components';

const DashboardPage = () => {
  const {
    userLoading,
    booksLoading,
    books,
    addedBooks,
    removeBook,
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
      <ReadBooks books={books} readBooks={addedBooks} removeBook={removeBook} />
      <hr />
      <FavoriteBooks
        favoriteBooks={favoriteBooks}
        removeFavoriteBook={removeFavoriteBook}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  margin: 4rem auto;

  hr {
    margin: 3rem 0;
  }
`;

export default DashboardPage;
