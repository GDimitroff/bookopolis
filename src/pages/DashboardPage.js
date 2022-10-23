import styled from 'styled-components';

import { useBooksContext } from '../context/BooksContext';
import { FavoriteBooks, ReadBooks } from '../components';
import image from '../assets/undraw_reading_time.svg';

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
      <div className="image">
        <img src={image} alt="Reading time" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  margin: 4rem auto;
  height: 80vh;

  hr {
    margin: 3rem 0;
  }

  .image {
    margin: 0 auto;

    img {
      width: 100%;
      display: block;
    }
  }
`;

export default DashboardPage;
