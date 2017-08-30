import React from 'react';
import { Link } from 'react-router-dom';

//Components
import BookShelf from './BookShelf';

const MyBooksPage = (props) => {
  const { books, handleShelfSelect } = props;
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
          handleShelfSelect={handleShelfSelect}
        />
        <BookShelf
          shelfTitle="Want to Read"
          books={books.filter(book => {
            return book.shelf === 'wantToRead';
          })}
          handleShelfSelect={handleShelfSelect}
        />
        <BookShelf shelfTitle="Read"
          books={books.filter(book => {
            return book.shelf === 'read';
          })}
          handleShelfSelect={handleShelfSelect}
        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default MyBooksPage;
