import React, { Component } from 'react';

import ShelfSelector from './ShelfSelector';

class BookShelf extends Component {
  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(mybook => (
              <li key={mybook.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${mybook.imageLinks.thumbnail})` }}></div>
                    <ShelfSelector
                      shelfStatus={mybook.shelf}
                      handleShelfSelect={(e) => this.props.handleShelfSelect(e, mybook)}
                    />
                  </div>
                  <div className="book-title">{mybook.title}</div>
                  <div className="book-authors">{mybook.authors.map(
                    (author, index) => {
                      return index === mybook.authors.length - 1 ? author : `${author}, `;
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
