import { useSelector } from 'react-redux';
import Book from './book';
import '../styles/booksList.css';

const BooksList = () => {
  const booksInfo = useSelector((state) => state.books.booksAry);

  return (
    <div className="booksList">
      {booksInfo.map((bookInfo) => (
        (<Book key={bookInfo.id} bookInfo={bookInfo} />)
      ))}
    </div>
  );
};

export default BooksList;
