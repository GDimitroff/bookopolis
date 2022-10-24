import styled from 'styled-components';
import { motion } from 'framer-motion';

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
    <Wrapper
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
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

const Wrapper = styled(motion.section)`
  display: grid;
  margin: 4rem auto;

  hr {
    margin: 3rem 0;
  }

  .image {
    max-width: 600px;
    margin: 4rem auto 0 auto;

    img {
      width: 100%;
      display: block;
    }
  }
`;

export default DashboardPage;
