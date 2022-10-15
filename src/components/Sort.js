import styled from 'styled-components';
import { FiGrid } from 'react-icons/fi';
import { FaList } from 'react-icons/fa';

const Sort = () => {
  return (
    <Wrapper>
      <div className="btn-container">
        <button type="button" className="active">
          <FiGrid />
        </button>
        <button type="button">
          <FaList />
        </button>
      </div>
      <hr />
      <form>
        <label htmlFor="sort">Подреди по: </label>
        <select name="sort" id="sort" className="sort-input">
          <option value="name-a">Азбучен ред (А-Я)</option>
          <option value="name-z">Обратен ред (Я-А)</option>
          <option value="grade-asc">Клас (Възходящ)</option>
          <option value="grade-des">Клас (Низходящ)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .btn-container {
    display: flex;
    gap: 6px;
    margin-bottom: 1rem;

    button {
      width: 2.6rem;
      height: 2.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-brown-2);
      background: transparent;
      border: 1px solid var(--color-brown-2);
      border-radius: var(--radius);
      cursor: pointer;

      svg {
        font-size: 1.6rem;
      }
    }

    .active {
      color: var(--color-red-1);
      background: var(--color-brown-2);
    }
  }

  hr {
    display: none;
  }

  .sort-input {
    font-family: inherit;
    border-color: transparent;
    padding: 0.4rem;
    font-weight: 700;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 400px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .btn-container {
      margin: 0;
    }

    .sort-input {
      margin-bottom: 0;
    }

    label {
      margin-right: 0.4rem;
    }
  }

  @media screen and (min-width: 440px) {
    display: grid;
    grid-template-columns: 70px 1fr auto;

    form {
      margin-left: 1rem;
    }

    hr {
      display: block;
      border-color: var(--color-brown-2);
    }
  }
`;

export default Sort;
