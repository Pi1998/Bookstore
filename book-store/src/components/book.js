import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import RemoveButton from './removeBtn';

const Book = ({ bookInfo }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(bookInfo.item_id));
  };

  return (
    <div>
      <div className="description">
        <p className="category">{bookInfo.category}</p>
        <h3 className="title">{bookInfo.title}</h3>
        <small className="author">{bookInfo.author}</small>
        <div className="btnContainer">
          <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
          <button type="button" className="edit">Edit</button>
        </div>
      </div>
      <div className="borderV" />
      <div className="chapter">
        <p>
          <span>Current chapter</span>
          <br />
          {bookInfo.chapter}
        </p>
        <button type="button" className="update">Update Progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
