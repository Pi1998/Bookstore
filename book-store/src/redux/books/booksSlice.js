import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  booksAry: [],
  isLoading: false,
  error: null,
};

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
axios.defaults.baseURL = baseURL;

const YOUR_APP_ID = 'eEQS3mmCqcp18Mjzt03t';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`/apps/${YOUR_APP_ID}/books`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching books');
  }
});

export const addBookAsync = createAsyncThunk('books/addBook', async (book) => {
  try {
    await axios.post(`/apps/${YOUR_APP_ID}/books`, book);
    return book;
  } catch (error) {
    throw new Error('Error adding book');
  }
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (itemId) => {
  try {
    await axios.delete(`/apps/${YOUR_APP_ID}/books/${itemId}`);
    return itemId;
  } catch (error) {
    throw new Error('Error removing book');
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksAry.push(action.payload);
    },
    removeBook: (state, action) => {
      state.booksAry = state.booksAry.filter((book) => book.item_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.booksAry = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
