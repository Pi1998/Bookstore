import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const book = {
      title: e.target.title.value,
      author: e.target.author.value,
      item_id: nanoid(),
    };
    if (book.title && book.author) dispatch(addBook(book));
    e.target.title.value = '';
    e.target.author.value = '';
  };

  return (
    <div className="bookInput">
      <h3 className="addBook">Add new book</h3>
      <form className="bookForm" onSubmit={submitHandler}>
        <input type="text" className="title" name="title" placeholder="Book title" />
        <input type="text" className="author" name="author" placeholder="Author" />
        <button type="submit" className="btnAdd">Add</button>
      </form>
    </div>
  );
};

export default AddBook;
