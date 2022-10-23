import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import BookTile from './BookTile';

const ReadBooks = ({ favoriteBooks, removeFavoriteBook }) => {
  return (
    <Wrapper>
      <div className="header">
        <AiFillHeart />
        <h2>Любими ({favoriteBooks.length})</h2>
      </div>
      {favoriteBooks.length > 0 ? (
        <div className="books">
          {favoriteBooks.map((book) => {
            return (
              <BookTile
                key={book.id}
                book={book}
                removeBook={removeFavoriteBook}
              />
            );
          })}
        </div>
      ) : (
        <p>Все още нямаш добавени любими произведения. ;(</p>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 10px;
    margin-bottom: 2rem;

    svg {
      font-size: 2.4rem;
      color: var(--color-red-1);
    }

    h2 {
      font-size: 2rem;
      line-height: 1;
    }
  }

  p {
    color: var(--color-brown-1);
    letter-spacing: 1px;
    font-size: 1.4rem;
  }

  .books {
    display: grid;
    gap: 1rem;
  }

  @media screen and (min-width: 768px) {
    .books {
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }
  }
`;

export default ReadBooks;
