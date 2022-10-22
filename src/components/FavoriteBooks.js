import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';

import placeholderCover from '../assets/placeholderCover.svg';

const FavoriteBooks = ({ favoriteBooks }) => {
  return (
    <Wrapper className="favorite-books">
      <h2>
        <AiFillHeart /> Любими
      </h2>
      <hr />
      <div className="books">
        {favoriteBooks.map((book) => {
          const { title, image } = book;
          return (
            <div key={book.id} className="book">
              <img src={image ? image : placeholderCover} alt={title} />
              <h5>{title}</h5>
              <button type="button">Премахни от любими</button>
            </div>
          );
        })}
      </div>
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
    margin: 1rem 0 2rem 0;
  }

  .books {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 2rem;
  }

  .book {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-brown-2);
    padding: 2rem;
    border-radius: var(--radius);

    img {
      height: 140px;
      width: 100px;
      display: block;
    }

    h5 {
      margin-top: 1rem;
      text-align: center;
    }

    button {
      align-self: flex-end;
    }
  }
`;

export default FavoriteBooks;
