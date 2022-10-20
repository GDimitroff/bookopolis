import { Fragment, useState } from 'react';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { toast } from 'react-toastify';

const Actions = ({ book, isBookAdded, addBook, removeBook }) => {
  const { id, title, author } = book;
  const [loading, setLoading] = useState(false);

  const handleAddBook = async () => {
    setLoading(true);
    await addBook(book);
    setLoading(false);

    toast.success(
      `"${title}" ${
        author ? 'от ' + author : ''
      } беше добавена в списъка с прочетени!`
    );
  };

  const handleRemoveBook = async () => {
    setLoading(true);
    await removeBook(id);
    setLoading(false);

    toast.error(
      `"${title}" ${
        author ? 'от ' + author : ''
      } беше премахната от списъка с прочетени!`
    );
  };

  return (
    <Fragment>
      {loading && <AiOutlineLoading3Quarters className="spinner-small icon" />}
      {!loading && !isBookAdded && (
        <button type="button" className="icon btn-add" onClick={handleAddBook}>
          <FaPlusSquare />
        </button>
      )}
      {!loading && isBookAdded && (
        <button
          type="button"
          className="icon btn-delete"
          onClick={handleRemoveBook}>
          <FaMinusSquare />
        </button>
      )}
    </Fragment>
  );
};

export default Actions;
