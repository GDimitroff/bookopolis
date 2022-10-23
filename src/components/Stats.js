import styled from 'styled-components';
import { SiProgress } from 'react-icons/si';

const Stats = ({ books, addedBooks }) => {
  const barWidth = Math.round((addedBooks.length / books.length) * 100) + '%';

  return (
    <Wrapper>
      <div className="header">
        <SiProgress />
        <h3>
          Прочетени <span className="red">{addedBooks.length}</span> от общо{' '}
          <span className="red">{books.length}</span> произведения
        </h3>
      </div>
      <div class="meter">
        <span style={{ width: barWidth }}>
          <span className="progress"></span>
          <span className="text">{barWidth}</span>
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;

    svg {
      font-size: 1.8rem;
    }
  }

  h3 {
    line-height: 1;

    .red {
      color: var(--color-red-1);
    }
  }

  .meter {
    position: relative;
    height: 3rem;
    background: var(--color-grey-8);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .meter span {
    display: block;
    height: 100%;
  }

  .progress {
    background-color: var(--color-red-1);
    animation: progress 1s linear;
  }

  .text {
    position: absolute;
    top: 5px;
    left: 10px;
    color: white;
  }

  @keyframes progress {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

export default Stats;
