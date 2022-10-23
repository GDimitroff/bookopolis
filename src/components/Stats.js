import styled from 'styled-components';

const Stats = ({ books, addedBooks }) => {
  const barWidth = Math.round((addedBooks.length / books.length) * 100) + '%';

  return (
    <Wrapper>
      <h3>
        Прочетени {addedBooks.length} от общо {books.length} произведения
      </h3>
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
  h3 {
    margin-bottom: 1rem;
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
