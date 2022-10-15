import styled from 'styled-components';

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book) => {
        return <h1 key={book.id}>{book.title}</h1>;
      })}
    </div>
  );
};

export default BookList;
