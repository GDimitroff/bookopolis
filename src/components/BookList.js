import styled from 'styled-components';

import { useBooksContext } from '../context/BooksContext';

const BookList = () => {
  const { booksLoading: loading, books } = useBooksContext();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {books.map((book) => {
        return <h1 key={book.id}>{book.title}</h1>;
      })}
    </div>
  );
};

export default BookList;
