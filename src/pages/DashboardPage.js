import styled from 'styled-components';

import { useBooksContext } from '../context/BooksContext';
import { FavoriteBooks, ReadBooks, Stats } from '../components';

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
      <Stats books={books} addedBooks={addedBooks} />
      <ReadBooks readBooks={addedBooks} removeBook={removeBook} />
      <FavoriteBooks
        favoriteBooks={favoriteBooks}
        removeFavoriteBook={removeFavoriteBook}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  margin: 3rem auto;
  gap: 3rem;
`;

export default DashboardPage;
