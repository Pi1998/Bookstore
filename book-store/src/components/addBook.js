const AddBook = () => (
  <div className="bookInput">
    <h3 className="addBook">Add new book</h3>
    <form className="bookForm">
      <input type="text" className="title" placeholder="Book title" />
      <input type="text" className="author" placeholder="Author" />
      <button type="submit" className="btnAdd">Add</button>
    </form>
  </div>
);

export default AddBook;
