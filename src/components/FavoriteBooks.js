import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';

const FavoriteBooks = ({ favoriteBooks, removeFavoriteBook }) => {
  let content;
  if (favoriteBooks.length === 0) {
    content = (
      <div className="empty-favorite">
        <h5>Все още нямаш добавени любими произведения. ;(</h5>
        <Link to="books">
          <button type="button" className="btn">
            ДОБАВИ
          </button>
        </Link>
      </div>
    );
  } else {
    content = (
      <div className="books">
        {favoriteBooks.map((book) => {
          const { title, author } = book;
          return (
            <section key={book.id} className="book">
              <div className="book-header">
                <h4 className="title">{title}</h4>
                <p>{author}</p>
              </div>
              <footer className="book-footer">
                <button type="button" onClick={() => removeFavoriteBook(book)}>
                  Премахни
                </button>
              </footer>
            </section>
          );
        })}
      </div>
    );
  }

  return (
    <Wrapper className="favorite-books">
      <h2>
        <AiFillHeart /> Любими ({favoriteBooks.length})
      </h2>
      <hr />
      {content}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  h2 {
    display: flex;
    align-items: center;
    gap: 6px;

    svg {
      color: var(--color-red-1);
    }
  }

  hr {
    margin: 1rem 0 3rem 0;
  }

  .empty-favorite {
    min-height: 120px;
    padding: 2rem;
    background-color: var(--background-color-1);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: var(--light-shadow);

    .btn {
      font-size: 1.4rem;
      padding: 0.6rem 1.6rem;
      margin-top: 1rem;
      background-color: var(--color-brown-2);
    }
  }

  .books {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 2rem;

    .book {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 2rem;
      border-radius: var(--radius);
      box-shadow: var(--light-shadow);

      .book-header {
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          margin-top: 1rem;
          text-align: center;
          letter-spacing: 1px;
          line-height: 1.1;
        }

        p {
          font-size: 1.4rem;
          margin-top: 0.4rem;
        }
      }

      button {
        font-size: 1.2rem;
        margin-top: 1rem;
        color: var(--color-red-1);
      }
    }
  }
`;

export default FavoriteBooks;
