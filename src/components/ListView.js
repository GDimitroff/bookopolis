import styled from 'styled-components';

import { useBooksContext } from '../context/BooksContext';
import Actions from './Actions';
import Favorite from './Favorite';

const ListView = ({ books }) => {
  const {
    addBook,
    removeBook,
    addFavoriteBook,
    removeFavoriteBook,
    addedBooks,
    favoriteBooks,
  } = useBooksContext();

  return (
    <Wrapper>
      {books.map((book) => {
        const { id, title, author, grade } = book;
        const isBookAdded = addedBooks.find((b) => b.id === id);
        const isFavoriteBook = favoriteBooks.find((b) => b.id === id);

        return (
          <article key={id}>
            <div className="left">
              <h3>"{title}"</h3>
              <h5>{author}</h5>
            </div>
            <div className="right">
              <div className="grades">
                {grade.map((g) => {
                  return (
                    <div className="grade" key={g}>
                      {g}
                    </div>
                  );
                })}
              </div>
              <div className="actions">
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
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 1.6rem;

  article {
    display: grid;
    box-shadow: var(--light-shadow);
    border-radius: var(--radius);
    padding: 2rem;

    .left {
      h3 {
        font-family: 'Lobster';
        font-size: 1.8rem;
        color: var(--color-red-1);
        line-height: 1;
        margin-bottom: 0.4rem;
      }

      h5 {
        font-size: 1.2rem;
        letter-spacing: 0;
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;

      .grades {
        display: flex;
        gap: 6px;
      }

      .grade {
        font-size: 1.4rem;
        width: 26px;
        height: 26px;
        display: grid;
        place-items: center;
        font-weight: 700;
        color: var(--color-brown-1);
        background-color: var(--color-brown-2);
        border-radius: var(--radius);
      }

      .actions {
        display: flex;
        gap: 6px;

        .icon,
        .favorite {
          display: grid;
          place-items: center;
          font-size: 2.6rem;
          transition: var(--transition);
          color: var(--color-brown-2);

          &:hover {
            transform: scale(1.1);
          }
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

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    article {
      grid-template-columns: auto 1fr;

      .right {
        justify-content: flex-end;
        gap: 6px;
        margin-top: 0;
      }
    }
  }
`;

export default ListView;
