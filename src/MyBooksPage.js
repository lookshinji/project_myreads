import React from 'react';
import { Link } from 'react-router-dom';

//Components
import BookShelf from './BookShelf';

const MyBooksPage = (props) => {
  const { books, onShelfSelect } = props;
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf
          shelfTitle="Currently Reading"
          books={books.filter(book => {
            return book.shelf === 'currentlyReading';
          })}
          onShelfSelect={onShelfSelect}
        />
        <BookShelf
          shelfTitle="Want to Read"
          books={books.filter(book => {
            return book.shelf === 'wantToRead';
          })}
          onShelfSelect={onShelfSelect}
        />
        <BookShelf shelfTitle="Read"
          books={books.filter(book => {
            return book.shelf === 'read';
          })}
          onShelfSelect={onShelfSelect}
        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default MyBooksPage;
