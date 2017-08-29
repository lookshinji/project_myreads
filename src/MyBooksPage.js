import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class MyBooksPage extends Component {
  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            shelfTitle="Currently Reading"
            books={this.props.books.filter(book => {
              return book.shelf === 'currentlyReading';
            })}
          />
          <BookShelf
            shelfTitle="Want to Read"
            books={this.props.books.filter(book => {
              return book.shelf === 'wantToRead';
            })}
          />
          <BookShelf shelfTitle="Read"
            books={this.props.books.filter(book => {
              return book.shelf === 'read';
            })}
          />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MyBooksPage;
