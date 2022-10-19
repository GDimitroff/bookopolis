import styled from 'styled-components';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useAuthContext } from '../context/AuthContext';
import placeholderCover from '../assets/placeholderCover.svg';

const Book = ({ book }) => {
  const { id, title, author, image, grade, type, note } = book;
  const { addBook } = useAuthContext();

  return (
    <Wrapper>
      <article key={id}>
        {type && <p className="type">{type}</p>}
        <img src={image ? image : placeholderCover} alt={title} />
        <div>
          <h3>"{title}"</h3>
          {note && <p className="note">{note}</p>}
          <h5>{author}</h5>
          <hr />
          <div className="actions">
            <div className="left">
              {grade.map((g) => {
                return (
                  <div className="grade" key={g}>
                    {g}
                  </div>
                );
              })}
            </div>
            <div className="right">
              <button type="button" className="favorite">
                <AiOutlineHeart />
              </button>
              <button
                type="button"
                className="icon"
                onClick={() => addBook(book)}>
                <FaPlusSquare />
              </button>
            </div>
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .type {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 1.2rem;
  }

  article {
    position: relative;

    padding: 3rem 2rem;
    box-shadow: var(--light-shadow);
    border-radius: var(--radius);

    img {
      display: none;
      height: 120px;
    }

    h3 {
      font-family: 'Lobster';
      color: var(--color-red-1);
      line-height: 1;
      margin-bottom: 0.4rem;
      font-size: 1.8rem;
    }

    .note {
      font-size: 1.2rem;
      margin-bottom: 0.4rem;
    }

    h5 {
      margin-bottom: 0.6rem;
      letter-spacing: 0;
    }

    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        display: flex;
        gap: 4px;

        .grade {
          font-size: 1.4rem;
          width: 26px;
          height: 26px;
          display: grid;
          place-items: center;
          font-weight: 700;
          color: var(--color-brown-1);
          background-color: var(--color-brown-2);
          border-radius: var(--radius);
        }
      }

      .right {
        display: flex;
        gap: 6px;

        .icon,
        .favorite {
          display: grid;
          place-items: center;
          font-size: 2.6rem;
        }

        .icon {
          color: var(--color-brown-1);
        }

        .favorite {
          color: var(--color-red-1);
        }
      }
    }
  }

  @media screen and (min-width: 360px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 1rem;

      img {
        display: block;
      }
    }
  }

  @media screen and (min-width: 480px) {
    article {
      gap: 2rem;

      h3 {
        font-size: 2rem;
      }
    }
  }
`;

export default Book;
