import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/booksSlice';
import AddButton from './addBtn';
import '../styles/addBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const book = {
      title,
      author,
      item_id: nanoid(),
    };
    if (book.title && book.author) {
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <>
      <div className="bookInput">
        <h3 className="addBook">Add new book</h3>
        <form className="bookForm" onSubmit={submitHandler}>
          <input
            type="text"
            className="inputTitle"
            name="title"
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="inputAuthor"
            name="author"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <AddButton onClick={submitHandler}>Add</AddButton>
        </form>
      </div>
    </>
  );
};

export default AddBook;
