// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/books';
import Category from './components/categories';
import Navigation from './components/navigation';
import AddBook from './components/addBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index path="/" element={<Books />} />
          <Route path="categories" element={<Category />} />
          <Route path="add-book" element={<AddBook />} />
          {' '}
          {/* Add this route */}
          <Route path="*" element={<div>Error!! page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
