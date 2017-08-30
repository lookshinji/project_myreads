import React from 'react';

import ShelfSelector from './ShelfSelector';

const Book = (props) => {
  const{ book, handleShelfSelect } = props;
  return(
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}></div>
        <ShelfSelector
          shelfStatus={book.shelf}
          handleShelfSelect={(e) => handleShelfSelect(e, book)}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? (book.authors.map(
          (author, index) => {
            return index === book.authors.length - 1 ? author : `${author}, `;
          })
        ) : 'no author listed' }
      </div>
    </div>
  );
};

export default Book;
