import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import { debounce } from 'lodash';
import './App.css';

//Components
import MyBooksPage from './MyBooksPage';
import SearchPage from './SearchPage';

class BooksApp extends Component {
  state = {
    books : [],
    results: [],
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then(response => {
        this.setState({ books : response });
      });
  }

  bookSearch(term){
    if(term === '') {
      this.setState({results: []});
    } else {
      BooksAPI.search(term, 20)
        .then(response => {
          if (response.error) {
            this.setState({ results : [] });
          } else {
            this.setState({ results : response });
          }
        });
    }
  }

  shelfChange = (e, book) => {
    let shelf = e.target.value;
    BooksAPI.update(book, shelf)
      .then(response => {
        BooksAPI.getAll()
          .then(response => {
            this.setState({ books : response });
          });
      });
  };

  render(){
    const bookSearch = debounce((term) => { this.bookSearch(term); }, 300);
    return (
      <div className="app">
        <Route exact path="/" render={() =>(
          <MyBooksPage
            books={this.state.books}
            handleShelfSelect={this.shelfChange}
          />
        )} />
        <Route path="/search" render={() => (
          <SearchPage
            handleSearch={bookSearch}
            handleShelfSelect={this.shelfChange}
            results={this.state.results}
            books={this.state.books}
          />
        )} />
      </div>
    );
  }
}

export default BooksApp;
