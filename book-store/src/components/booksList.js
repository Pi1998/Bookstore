import { useState } from 'react';
import Book from './book';

const BooksList = () => {
  const [booksInfo] = useState([
    {
      id: 1,
      category: 'Science Fiction',
      title: 'Interstaller',
      author: 'Frank',
      chapter: 'Chapter 4',
    },
    {
      id: 2,
      category: 'Drama',
      title: 'Kiminonawa',
      author: 'Herbert',
      chapter: 'Chapter 2',
    },
    {
      id: 3,
      category: 'Comic',
      title: 'Ironman',
      author: 'Stan Lee',
      chapter: 'Chapter 7',
    },
  ]);

  return (
    <div className="booksList">
      {booksInfo.map((bookInfo) => (
        (<Book key={bookInfo.id} bookInfo={bookInfo} />)
      ))}
    </div>
  );
};

export default BooksList;
