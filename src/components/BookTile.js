import styled from 'styled-components';
import { useState } from 'react';
import { AiFillCloseSquare, AiOutlineLoading3Quarters } from 'react-icons/ai';

const BookTile = ({ book, removeBook }) => {
  const [loading, setLoading] = useState(false);
  const { title, author } = book;

  const handleRemove = async (book) => {
    setLoading(true);
    await removeBook(book);
    setLoading(false);
  };

  return (
    <Wrapper key={book.id} className="book">
      <div className="left">
        <h4>{title}</h4>
        {author ? <p>{author}</p> : <p>Авторът не е добавен</p>}
      </div>
      <div className="right">
        {loading && (
          <button type="button">
            <AiOutlineLoading3Quarters className="spinner-small icon" />
          </button>
        )}
        {!loading && (
          <button type="button" onClick={() => handleRemove(book)}>
            <AiFillCloseSquare className="icon" />
          </button>
        )}
      </div>
    </Wrapper>
  );
};

export default BookTile;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 1.6rem;
  border-radius: var(--radius);
  background-color: var(--color-grey-8);

  h4 {
    font-size: 1.4rem;
    line-height: 1;
  }

  p {
    font-size: 1.2rem;
  }

  button {
    display: grid;
    place-items: center;
    color: var(--color-brown-1);
    overflow: hidden;

    &:hover {
      color: var(--color-red-1);
      transition: all 0.2s ease-in-out;
    }

    .icon {
      font-size: 2.4rem;
    }
  }
`;
