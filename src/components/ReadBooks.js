import styled from 'styled-components';
import { SiProgress } from 'react-icons/si';
import { AiFillCloseSquare } from 'react-icons/ai';

const ReadBooks = ({ books, readBooks, removeBook }) => {
  const barWidth = Math.round((readBooks.length / books.length) * 100) + '%';
  const sortedBooks = readBooks.sort((a, b) => a.grade[0] - b.grade[0]);

  return (
    <Wrapper>
      <div className="header">
        <SiProgress />
        <h2>
          Прочетени <span className="red">{readBooks.length}</span> от общо{' '}
          <span className="red">{books.length}</span> произведения
        </h2>
      </div>
      <div className="meter">
        <span style={{ width: barWidth }}>
          <span className="progress"></span>
          <span className="text">{barWidth}</span>
        </span>
      </div>
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
  .header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 10px;
    margin-bottom: 2rem;

    svg {
      font-size: 2rem;
      color: var(--color-red-1);
    }

    h2 {
      font-size: 2rem;
      line-height: 1;

      .red {
        color: var(--color-red-1);
      }
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

  .meter {
    position: relative;
    height: 3rem;
    margin-bottom: 2rem;
    background: var(--color-grey-8);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .meter span {
    display: block;
    height: 100%;
  }

  .progress {
    background-color: var(--color-red-1);
    animation: progress 1s linear;
  }

  .text {
    position: absolute;
    top: 5px;
    left: 10px;
    color: white;
  }

  @keyframes progress {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    .books {
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }
  }
`;

export default ReadBooks;
