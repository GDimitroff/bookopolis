import styled from 'styled-components';

import placeholderCover from '../assets/placeholderCover.svg';

const Book = ({ id, title, author, image, grade, type }) => {
  return (
    <Wrapper>
      <article key={id}>
        <div className="grade">{grade}</div>
        <img src={image ? image : placeholderCover} alt={title} />
        <div>
          <h3>"{title}"</h3>
          <h5>{author}</h5>
          <hr />
          <div className="actions">
            <button type="button">+ Добави</button>
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  article {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    box-shadow: var(--light-shadow);
    border-radius: var(--radius);

    img {
      height: 120px;
    }

    h3 {
      font-family: 'Lobster';
      color: var(--color-red-1);
      line-height: 1;
      margin-bottom: 0.4rem;
    }

    h5 {
      margin-bottom: 0.6rem;
      letter-spacing: 0;
    }

    p {
      font-size: 1.4rem;
    }

    .grade {
      position: absolute;
      top: 0;
      right: 0;
      width: 40px;
      height: 40px;
      display: grid;
      place-items: center;
      font-size: 1.8;
      font-weight: 700;
      color: var(--color-brown-1);
      background-color: var(--color-brown-2);
      border-top-right-radius: var(--radius);
    }

    .actions {
      display: flex;

      button {
        font-size: 1.4rem;
        color: var(--color-brown-1);

        &:hover,
        &:active {
          color: var(--color-red-1);
        }
      }
    }
  }
`;

export default Book;
