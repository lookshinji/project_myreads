import React, { Component } from 'react';

import ShelfSelector from './ShelfSelector';

class BookShelf extends Component {
  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.thumbnail})` }}></div>
                    <ShelfSelector
                      shelfStatus={book.shelf}
                      handleShelfSelect={(e) => this.props.handleShelfSelect(e, book)}
                    />
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors.map(
                    (author, index) => {
                      return index === book.authors.length - 1 ? author : `${author}, `;
                    })}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
