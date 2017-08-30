import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Book from './Book';

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

export default SearchPage;
