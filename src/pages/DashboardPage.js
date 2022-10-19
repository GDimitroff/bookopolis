import { useBooksContext } from '../context/BooksContext';

const DashboardPage = () => {
  const {
    booksLoading: loading,
    addedBooks,
    favoriteBooks,
  } = useBooksContext();

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      {addedBooks.map((b) => {
        const { id, title, author, grade, image } = b;
        return (
          <div key={id}>
            <h1>{title}</h1>
            <h1>{author}</h1>
            <img src={image} alt="" style={{ width: '200px' }} />
          </div>
        );
      })}
      <h1>{favoriteBooks}</h1>
    </div>
  );
};

export default DashboardPage;
