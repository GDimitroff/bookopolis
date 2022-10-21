import styled from 'styled-components';

import { useBooksContext } from '../context/BooksContext';
import Actions from './Actions';
import Favorite from './Favorite';
import placeholderCover from '../assets/placeholderCover.svg';

const Book = ({ book }) => {
  const {
    addBook,
    removeBook,
    addFavoriteBook,
    removeFavoriteBook,
    addedBooks,
    favoriteBooks,
  } = useBooksContext();
  const { id, title, author, image, grade, type, addedBy } = book;
  const isBookAdded = addedBooks.find((b) => b.id === id);
  const isFavoriteBook = favoriteBooks.find((b) => b.id === id);

  return (
    <Wrapper>
      <article key={id}>
        <div className="ribbon">
          <p className="grade">{grade.join(', ')}</p>
        </div>
        <img src={image ? image : placeholderCover} alt={title} />
        <div>
          <h3>"{title}"</h3>
          <h5>{author}</h5>
          <p className="type">{type}</p>
          <hr />
          <div className="actions">
            <div className="left">
              <p className="read">
                {addedBy.length}{' '}
                {addedBy.length === 1 ? 'прочитане' : 'прочитания'}
              </p>
            </div>
            <div className="right">
              <Favorite
                book={book}
                isFavoriteBook={isFavoriteBook}
                addFavoriteBook={addFavoriteBook}
                removeFavoriteBook={removeFavoriteBook}
              />
              <Actions
                book={book}
                isBookAdded={isBookAdded}
                addBook={addBook}
                removeBook={removeBook}
              />
            </div>
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  article {
    height: 100%;
    position: relative;
    padding: 3rem 2rem;
    box-shadow: var(--light-shadow);
    border-radius: var(--radius);

    .ribbon {
      --f: 10px; /* control the folded part*/
      --r: 15px; /* control the ribbon shape */
      --t: 15px; /* the top offset */

      position: absolute;
      inset: var(--t) calc(-1 * var(--f)) auto auto;
      padding: 0 10px var(--f) calc(10px + var(--r));
      clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - var(--f)),
        calc(100% - var(--f)) 100%,
        calc(100% - var(--f)) calc(100% - var(--f)),
        0 calc(100% - var(--f)),
        var(--r) calc(50% - var(--f) / 2)
      );
      color: var(--color-brown-1);
      background: var(--color-brown-2);
      box-shadow: 0 calc(-1 * var(--f)) 0 inset #0005;

      .grade {
        font-size: 1.2rem;
        padding: 0.4rem;
      }
    }

    img {
      display: none;
      height: 120px;
    }

    h3 {
      font-family: 'Lobster';
      color: var(--color-red-1);
      line-height: 1;
      margin-bottom: 0.4rem;
      font-size: 1.8rem;
    }

    h5 {
      margin-bottom: 0.2rem;
      letter-spacing: 0;
    }

    .type {
      font-size: 1.2rem;
    }

    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        display: flex;
        align-items: center;
        gap: 4px;

        .read {
          font-size: 1.4rem;
        }
      }

      .right {
        display: flex;
        gap: 6px;

        .icon,
        .favorite {
          display: grid;
          place-items: center;
          font-size: 2.6rem;
          transition: var(--transition);
          color: var(--color-brown-2);
        }

        .btn-add {
          color: var(--color-green-1);
        }

        .btn-delete {
          color: var(--color-red-1);
        }

        .favorite {
          color: var(--color-red-1);
        }
      }
    }
  }

  @media screen and (min-width: 360px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 1rem;

      img {
        display: block;
      }
    }
  }

  @media screen and (min-width: 480px) {
    article {
      gap: 2rem;

      h3 {
        font-size: 2rem;
      }
    }
  }
`;

export default Book;
