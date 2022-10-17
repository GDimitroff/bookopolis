import styled from 'styled-components';

import { useFiltersContext } from '../context/FiltersContext';
import { FiGrid } from 'react-icons/fi';
import { FaList } from 'react-icons/fa';

const Filters = () => {
  const { gridView, setGridView, setListView, updateFilters, updateSort } =
    useFiltersContext();

  return (
    <Wrapper>
      <div className="btn-container">
        <button
          type="button"
          className={`${gridView ? 'active' : ''}`}
          onClick={setGridView}>
          <FiGrid />
        </button>
        <button
          type="button"
          className={`${!gridView ? 'active' : ''}`}
          onClick={setListView}>
          <FaList />
        </button>
      </div>
      <hr />
      <form>
        <div className="grades">
          <label htmlFor="grade">Клас: </label>
          <select
            name="grade"
            id="grade"
            className="grade-input"
            onChange={updateFilters}>
            <option value="all">Всички</option>
            <option value="2">2 клас</option>
            <option value="3">3 клас</option>
            <option value="4">4 клас</option>
            <option value="5">5 клас</option>
            <option value="6">6 клас</option>
            <option value="7">7 клас</option>
            <option value="8">8 клас</option>
            <option value="9">9 клас</option>
            <option value="10">10 клас</option>
            <option value="11">11 клас</option>
            <option value="12">12 клас</option>
          </select>
        </div>
        <div className="sort">
          <label htmlFor="sort">Подреди по: </label>
          <select
            name="sort"
            id="sort"
            className="sort-input"
            onChange={updateSort}>
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
  padding: 1rem;
  border-radius: var(--radius);
  margin-bottom: 3rem;

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

  .grade,
  .sort {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .sort-input,
  .grade-input {
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

      .grade,
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

export default Filters;
