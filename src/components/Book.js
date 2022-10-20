import styled from 'styled-components';

import { useBooksContext } from '../context/BooksContext';
import Actions from './Actions';
import Favorite from './Favorite';
import placeholderCover from '../assets/placeholderCover.svg';

const Book = ({ book }) => {
  const { addBook, removeBook, addFavoriteBook, addedBooks, favoriteBooks } =
    useBooksContext();
  const { id, title, author, image, grade, type, note } = book;
  const isBookAdded = addedBooks.find((b) => b.id === id);
  const isFavoriteBook = favoriteBooks.find((b) => b.id === id);

  return (
    <Wrapper>
      <article key={id}>
        {type && <p className="type">{type}</p>}
        <img src={image ? image : placeholderCover} alt={title} />
        <div>
          <h3>"{title}"</h3>
          {note && <p className="note">{note}</p>}
          <h5>{author}</h5>
          <hr />
          <div className="actions">
            <div className="left">
              {grade.map((g) => {
                return (
                  <div className="grade" key={g}>
                    {g}
                  </div>
                );
              })}
            </div>
            <div className="right">
              <Favorite
                book={book}
                isFavoriteBook={isFavoriteBook}
                addFavoriteBook={addFavoriteBook}
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
  .type {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 1.2rem;
  }

  article {
    position: relative;

    padding: 3rem 2rem;
    box-shadow: var(--light-shadow);
    border-radius: var(--radius);

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

    .note {
      font-size: 1.2rem;
      margin-bottom: 0.4rem;
    }

    h5 {
      margin-bottom: 0.6rem;
      letter-spacing: 0;
    }

    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        display: flex;
        gap: 4px;

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
