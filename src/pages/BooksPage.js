import styled from 'styled-components';

import { BookList, Filters } from '../components';

const BooksPage = () => {
  return (
    <main>
      <Wrapper className="section">
        <h2 className="title">Kнигите за лятото</h2>
        <Filters />
        <BookList />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: calc(100vh - (var(--navbar-height)) - 8rem);
  margin: 4rem auto;

  .title {
    letter-spacing: 1px;
    margin-bottom: 2rem;
  }
`;

export default BooksPage;
