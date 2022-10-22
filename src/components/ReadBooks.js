import styled from 'styled-components';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { AiFillCloseSquare } from 'react-icons/ai';

const ReadBooks = ({ readBooks, removeBook }) => {
  const sortedBooks = readBooks.sort((a, b) => a.grade[0] - b.grade[0]);

  return (
    <Wrapper>
      <h2>
        <BsFillCheckSquareFill /> Прочетени ({sortedBooks.length})
      </h2>
      <hr />
      {sortedBooks.length > 0 ? (
        <div className="books">
          {sortedBooks.map((book) => {
            const { title, author } = book;
            return (
              <section key={book.id} className="book">
                <div className="left">
                  <h4>{title}</h4>
                  {author ? <p>{author}</p> : <p>Авторът не е добавен</p>}
                </div>
                <div className="right">
                  <button type="button" onClick={() => removeBook(book)}>
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
        <p>Списъкът ти с прочетени произведения е празен. ;(</p>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 1.6rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);

  h2 {
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      font-size: 2rem;
      color: var(--color-green-1);
    }
  }

  hr {
    margin: 1rem 0 2rem 0;
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
      background-color: var(--color-brown-2);

      h4 {
        font-size: 1.4rem;
        line-height: 1;
      }

      p {
        font-size: 1.2rem;
      }

      button {
        font-size: 1.2rem;
        color: var(--color-red-1);
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
