import { useBooksContext } from '../context/BooksContext';
import { useFiltersContext } from '../context/FiltersContext';
import GridView from './GridView';
import ListView from './ListView';

const BookList = () => {
  const { booksLoading: loading, booksError: error } = useBooksContext();
  const { filteredBooks: books, gridView } = useFiltersContext();

  if (loading) {
    return <h5>Зареждане...</h5>;
  }

  if (error) {
    return <h5>Възникна грешка! Моля, опитайте отново.</h5>;
  }

  if (books.length < 1) {
    return <h5>Списъкът с произведения предстои да бъде добавен.</h5>;
  }

  if (gridView === false) {
    return <ListView books={books} />;
  }

  return <GridView books={books} />;
};

export default BookList;
