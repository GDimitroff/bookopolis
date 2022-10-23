import styled from 'styled-components';
import { AiFillCloseSquare, AiFillHeart } from 'react-icons/ai';

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
            const { title, author } = book;
            return (
              <section key={book.id} className="book">
                <div className="left">
                  <h4>{title}</h4>
                  {author ? <p>{author}</p> : <p>Авторът не е добавен</p>}
                </div>
                <div className="right">
                  <button
                    type="button"
                    onClick={() => removeFavoriteBook(book)}>
                    <AiFillCloseSquare
                      style={{
                        fontSize: '2.6rem',
                        color: 'var(--color-brown-1)',
                      }}
                    />
                  </button>
                </div>
              </section>
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

    .book {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: 0.6rem;
      padding: 1rem 1.6rem;
      border-radius: var(--radius);
      background-color: #e2e8f0;

      h4 {
        color: var(--color-brown-1);
        font-size: 1.4rem;
        line-height: 1;
      }

      p {
        color: var(--color-brown-1);
        font-size: 1.2rem;
      }

      button {
        display: grid;
        place-items: center;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .books {
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }
  }
`;

export default ReadBooks;
