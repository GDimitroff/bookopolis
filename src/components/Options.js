import styled from 'styled-components';
import { FiGrid } from 'react-icons/fi';
import { FaList } from 'react-icons/fa';

const Options = () => {
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
        <div className="grades">
          <label htmlFor="grades">Клас: </label>
          <select name="grades" id="grades" className="grades-input">
            <option value="all">Всички</option>
            <option value="five">5 клас</option>
            <option value="six">6 клас</option>
            <option value="seven">7 клас</option>
            <option value="eight">8 клас</option>
            <option value="nine">9 клас</option>
            <option value="ten">10 клас</option>
            <option value="eleven">11 клас</option>
            <option value="twelve">12 клас</option>
          </select>
        </div>
        <div className="sort">
          <label htmlFor="sort">Подреди по: </label>
          <select name="sort" id="sort" className="sort-input">
            <option value="name-a">Азбучен ред (А-Я)</option>
            <option value="name-z">Обратен ред (Я-А)</option>
          </select>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--color-brown-2);
  padding: 2rem;
  border-radius: var(--radius);
  margin-bottom: 2rem;

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
      color: var(--color-brown-1);
      background: transparent;
      border: 1px solid var(--color-brown-1);
      border-radius: var(--radius);
      cursor: pointer;

      svg {
        font-size: 1.6rem;
      }
    }

    .active {
      color: var(--color-brown-2);
      background: var(--color-brown-1);
      border: 1px solid var(--brown-red-1);
    }
  }

  hr {
    display: none;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .grades,
  .sort {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .sort-input,
  .grades-input {
    font-family: inherit;
    border-color: transparent;
    padding: 0.4rem;
    border-radius: var(--radius);
  }

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 70px 1fr auto;
    align-items: center;

    .btn-container {
      margin-bottom: 0;
    }

    form {
      flex-direction: row;
      align-items: center;
      margin-left: 1rem;

      .grades,
      .sort {
        flex-direction: row;
        align-items: center;
        gap: 4px;
      }
    }

    hr {
      display: block;
      border-color: var(--color-brown-1);
    }
  }
`;

export default Options;
