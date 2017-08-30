import React from 'react';

//Components
import ShelfSelector from './ShelfSelector';

const BookShelf = (props) => {
  const{ shelfTitle, books, handleShelfSelect } = props;
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(mybook => (
            <li key={mybook.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${mybook.imageLinks ? mybook.imageLinks.thumbnail : ''})` }}></div>
                  <ShelfSelector
                    shelfStatus={mybook.shelf}
                    handleShelfSelect={(e) => handleShelfSelect(e, mybook)}
                  />
                </div>
                <div className="book-title">{mybook.title}</div>
                <div className="book-authors">
                  {mybook.authors ? (mybook.authors.map(
                    (author, index) => {
                      return index === mybook.authors.length - 1 ? author : `${author}, `;
                    })
                  ) : 'no author listed' }
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
