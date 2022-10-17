import styled from 'styled-components';

const ListView = ({ books }) => {
  return (
    <Wrapper>
      {books.map((book) => {
        const { id, title, author, grade } = book;
        return (
          <article key={id}>
            <div className="left">
              <h3>"{title}"</h3>
              <h5>{author}</h5>
            </div>
            <div className="right">
              <button type="button">+ Добави</button>
              <div className="grade">{grade}</div>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 2rem;

  article {
    display: grid;
    grid-template-columns: 1fr auto;
    box-shadow: var(--light-shadow);
    border-radius: var(--radius);
    padding: 2rem;

    .left {
      h3 {
        font-family: 'Lobster';
        color: var(--color-red-1);
        line-height: 1;
        margin-bottom: 0.4rem;
      }

      h5 {
        letter-spacing: 0;
      }
    }

    .right {
      display: flex;
      align-items: center;
      gap: 12px;

      .grade {
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        font-weight: 700;
        background-color: var(--color-brown-2);
        border-radius: var(--radius);
      }

      button:hover,
      button:active {
        color: var(--color-red-1);
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default ListView;
