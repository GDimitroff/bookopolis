import { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineLoading3Quarters,
} from 'react-icons/ai';

const Favorite = ({
  book,
  isFavoriteBook,
  addFavoriteBook,
  removeFavoriteBook,
}) => {
  const { title, author } = book;
  const [loading, setLoading] = useState(false);

  const handleAddFavoriteBook = async () => {
    setLoading(true);
    await addFavoriteBook(book);
    setLoading(false);

    toast.info(
      `"${title}" ${author ? 'от ' + author : ''} беше добавена в любими!`,
      {
        icon: <AiFillHeart style={{ fontSize: '2rem', color: '#da00f7' }} />,
      }
    );
  };

  const handleRemoveFavoriteBook = async () => {
    setLoading(true);
    await removeFavoriteBook(book);
    setLoading(false);
  };

  return (
    <Fragment>
      {loading && <AiOutlineLoading3Quarters className="spinner-small icon" />}
      {!loading && !isFavoriteBook && (
        <button
          type="button"
          className="favorite"
          onClick={handleAddFavoriteBook}>
          <AiOutlineHeart />
        </button>
      )}
      {!loading && isFavoriteBook && (
        <button
          type="button"
          className="favorite"
          onClick={handleRemoveFavoriteBook}>
          <AiFillHeart />
        </button>
      )}
    </Fragment>
  );
};

export default Favorite;
