import styled from 'styled-components';

import Book from './Book';

const GridView = ({ books }) => {
  return (
    <Wrapper>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }

  @media (min-width: 1090px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default GridView;
