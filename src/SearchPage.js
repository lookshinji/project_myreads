import React from 'react';
import { Link } from 'react-router-dom';

//Components
import ShelfSelector from './ShelfSelector';

const SearchPage = (props) => {
  const { term, handleSearchChange, results, handleShelfSelect } = props;
  return(
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            value={term}
            onChange={ e => handleSearchChange(e.target.value) }
            type="text"
            placeholder="Search by title or author"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {results.map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}></div>
                  <ShelfSelector
                    shelfStatus={book.shelf}
                    handleShelfSelect={e => handleShelfSelect(e, book)}
                  />
                </div>
                <div className="book-title">{book.title ? book.title : 'no title'}</div>
                <div className="book-authors">
                  {book.authors ? (book.authors.map(
                    (author, index) => {
                      return index === book.authors.length - 1 ? author : `${author}, `;
                    })
                  ) : 'no author' }
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
