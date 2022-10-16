import styled from 'styled-components';

import placeholderCover from '../assets/placeholderCover.svg';

const Book = ({ id, title, image, author, grade }) => {
  return (
    <Wrapper>
      <div className="grade">{grade}</div>
      <div className="card-content">
        <img src={image ? image : placeholderCover} alt="" />
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
      <footer className="card-footer">
        <button type="button" className="btn-add">
          + Добави
        </button>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  position: relative;
  padding: 3rem;
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--light-shadow);

  .grade {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--color-brown-1);
    background-color: var(--color-brown-2);
    border-top-right-radius: var(--radius);
  }

  .card-content {
    margin-bottom: 2rem;

    img {
      width: 100%;
    }

    h3 {
      margin-bottom: 0.4rem;
    }
  }

  .card-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    .btn-add {
      width: 100%;
      font-weight: 700;
      background-color: var(--color-brown-2);
      padding: 1rem 2rem;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  h3 {
    font-family: 'Lobster';
    color: var(--color-red-1);
    line-height: 1;
  }
`;

export default Book;
