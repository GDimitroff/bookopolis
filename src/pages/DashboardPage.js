import { useBooksContext } from '../context/BooksContext';

const DashboardPage = () => {
  const { booksLoading, userLoading, addedBooks, favoriteBooks } =
    useBooksContext();

  if (booksLoading || userLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <h1>dashboard</h1>
      {addedBooks.map((b) => {
        const { id, title, author, image } = b;
        return (
          <div key={id}>
            <h1>{title}</h1>
            <h1>{author}</h1>
            <img src={image} alt="" style={{ width: '200px' }} />
          </div>
        );
      })}
      <h1>{JSON.stringify(favoriteBooks)}</h1>
    </div>
  );
};

export default DashboardPage;
