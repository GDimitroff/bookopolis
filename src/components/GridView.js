import styled from 'styled-components';
import { motion } from 'framer-motion';

import Book from './Book';

const GridView = ({ books }) => {
  return (
    <Wrapper layout>
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled(motion.section)`
  display: grid;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }

  @media (min-width: 1090px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default GridView;
