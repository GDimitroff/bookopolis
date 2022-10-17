import styled from 'styled-components';

import placeholderCover from '../assets/placeholderCover.svg';

const Book = ({ id, title, image, author, grade }) => {
  return (
    <Wrapper>
      <header className="book-header">
        <div className="left">
          <img src={image ? image : placeholderCover} alt={title} />
        </div>
        <div className="right">
          <div className="grade">{grade}</div>
          <button type="button" className="btn-add">
            +
          </button>
        </div>
      </header>
      <div className="book-info">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  position: relative;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  padding: 3rem;

  .grade {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    font-size: 1.8rem;
    font-weight: 700;
    border-radius: var(--radius);
    color: var(--color-brown-1);
    background-color: var(--color-brown-2);
  }

  .book-header {
    display: grid;
    grid-template-columns: 1fr auto;

    .left {
      img {
        width: 100px;
        margin-bottom: 2rem;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      gap: 6px;

      .btn-add {
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--color-white);
        background-color: var(--color-green-1);
      }
    }
  }

  .book-info {
    h3 {
      font-family: 'Lobster';
      color: var(--color-red-1);
      line-height: 1;
      margin-bottom: 0.4rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;

export default Book;
