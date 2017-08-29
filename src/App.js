import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

//Components
import MyBooksPage from './MyBooksPage';
import SearchPage from './SearchPage';

class BooksApp extends Component {
  state = {
    results: [],
  }
  
  bookSearch(term) {
    BooksAPI.search(term, 20)
      .then(response => {
        this.setState({ results : response ? response : []});
      });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={MyBooksPage} />
        <Route path="/search" render={() => (
          <SearchPage
            handleSearch={term => this.bookSearch(term)}
            results={this.state.results} />
        )} />
      </div>
    );
  }
}

export default BooksApp;
