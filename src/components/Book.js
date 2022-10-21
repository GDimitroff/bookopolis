import styled from 'styled-components';

import { useBooksContext } from '../context/BooksContext';
import Actions from './Actions';
import Favorite from './Favorite';
import placeholderCover from '../assets/placeholderCover.svg';
import { FaEye } from 'react-icons/fa';

const Book = ({ book }) => {
  const {
    addBook,
    removeBook,
    addFavoriteBook,
    removeFavoriteBook,
    addedBooks,
    favoriteBooks,
  } = useBooksContext();
  const { id, title, author, image, grade, type, note, addedBy, favoriteBy } =
    book;
  const isBookAdded = addedBooks.find((b) => b.id === id);
  const isFavoriteBook = favoriteBooks.find((b) => b.id === id);

  return (
    <Wrapper>
      <article key={id}>
        <p className="read">
          {addedBy.length}
          <FaEye />
        </p>
        <img src={image ? image : placeholderCover} alt={title} />
        <div>
          <h3>"{title}"</h3>
          <h5>{author}</h5>
          <p>{type}</p>
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
  .read {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  article {
    position: relative;

    padding: 4rem 2rem 3rem 2rem;
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

    h5 {
      margin-bottom: 0.2rem;
      letter-spacing: 0;
    }

    p {
      font-size: 1.2rem;
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
