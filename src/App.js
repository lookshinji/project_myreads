import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
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
    BooksAPI.search(term, 20)
      .then(response => {
        this.setState({ results : response ? response : []});
      });
  }

  render(){
    return (
      <div className="app">
        <Route exact path="/" render={() =>(
          <MyBooksPage
            books={this.state.books}
          />
        )} />
        <Route path="/search" render={() => (
          <SearchPage
            handleSearch={term => this.bookSearch(term)}
            results={this.state.results}
          />
        )} />
      </div>
    );
  }
}

export default BooksApp;
