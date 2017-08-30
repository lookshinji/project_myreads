import React from 'react';

//Components
import Book from './Book';

const BookShelf = (props) => {
  const{ shelfTitle, books, handleShelfSelect } = props;
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book
                handleShelfSelect={handleShelfSelect}
                book={book}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
