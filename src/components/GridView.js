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
  justify-items: center;
  gap: 3rem;

  @media screen and (min-width: 390px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
`;

export default GridView;
