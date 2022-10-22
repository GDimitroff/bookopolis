import styled from 'styled-components';

const ReadBooks = ({ readBooks }) => {
  const sortedBooks = readBooks.sort((a, b) => a.grade[0] - b.grade[0]);

  return (
    <Wrapper className="added-books">
      <h3>Прочетени</h3>
      {sortedBooks.map((book) => {
        return (
          <article key={book.id}>
            <h4>{book.title}</h4>
            <p>{book.grade[0]}</p>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.article``;

export default ReadBooks;
