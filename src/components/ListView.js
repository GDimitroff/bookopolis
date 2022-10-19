import styled from 'styled-components';

import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

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
              <div className="grades">
                {grade.map((g) => {
                  return (
                    <div className="grade" key={g}>
                      {g}
                    </div>
                  );
                })}
              </div>
              <div className="actions">
                <button type="button" className="favorite">
                  <AiOutlineHeart />
                </button>
                <button type="button" className="icon">
                  <FaPlusSquare />
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 1.6rem;

  article {
    display: grid;
    box-shadow: var(--light-shadow);
    border-radius: var(--radius);
    padding: 2rem;

    .left {
      h3 {
        font-family: 'Lobster';
        font-size: 1.8rem;
        color: var(--color-red-1);
        line-height: 1;
        margin-bottom: 0.4rem;
      }

      h5 {
        font-size: 1.2rem;
        letter-spacing: 0;
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;

      .grades {
        display: flex;
        gap: 6px;
      }

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

      .actions {
        display: flex;
        gap: 6px;

        .icon,
        .favorite {
          display: grid;
          place-items: center;
          font-size: 2.4rem;
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

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    article {
      grid-template-columns: auto 1fr;

      .right {
        justify-content: flex-end;
        gap: 6px;
        margin-top: 0;
      }
    }
  }
`;

export default ListView;
