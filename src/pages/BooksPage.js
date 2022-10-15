import styled from 'styled-components';
import { BookList, Filters, Sort } from '../components';

const BooksPage = () => {
  return (
    <main>
      <Wrapper className="section">
        <div>
          <Filters />
        </div>
        <div>
          <Sort />
          <BookList />
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - (var(--navbar-height)) - 8rem);
  margin: 4rem auto;
`;

export default BooksPage;
