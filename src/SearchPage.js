import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ShelfSelector from './ShelfSelector';

class SearchPage extends Component {

  state = {
    term : '',
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.handleSearch(term);
  }

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              value={this.state.term}
              onChange={ e => this.onInputChange(e.target.value) }
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.results.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <ShelfSelector />
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors.map(
                    (author, index) => {
                      return index === book.authors.length - 1 ? author : `${author}, `;
                    })}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
};

export default SearchPage;
