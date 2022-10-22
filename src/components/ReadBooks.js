import styled from 'styled-components';
import { BsFillCheckSquareFill } from 'react-icons/bs';

const ReadBooks = ({ readBooks, removeBook }) => {
  const sortedBooks = readBooks.sort((a, b) => a.grade[0] - b.grade[0]);

  return (
    <Wrapper className="favorite-books">
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
                    Премахни
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
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);

  h2 {
    display: flex;
    align-items: center;
    gap: 6px;

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
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1rem;

    .book {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      border-radius: var(--radius);
      background-color: var(--color-brown-2);

      h4 {
        font-size: 1.4rem;
        line-height: 1.1;
      }

      p {
        font-size: 1.2rem;
      }

      button {
        font-size: 1.2rem;
        color: var(--color-red-1);
      }
    }
  }
`;

export default ReadBooks;
