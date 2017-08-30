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
    term : '',
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then(response => {
        this.setState({ books : response });
      });
  }

  onSearchChange = (term) => {
    this.setState({ term });
    const searchBooks = debounce(() => this.bookSearch(term), 300);
    searchBooks();
  }

  bookSearch = (term) => {
    if(term === '') {
      this.setState({results: []});
    } else {
      BooksAPI.search(term, 20)
        .then(response => {
          if (response.error) {
            this.setState({ results : [] });
          } else {
            this.compareResults(response);
          }
        });
    }
  }

  compareResults = (response) => {
    const { books } = this.state;

    this.setState({
      results: response.filter(book => {
        return !books.some(myBook => {
          return myBook.id === book.id;
        });
      })
    });
  }

  clearSearch = () => {
    this.setState({
      results : [],
      term : ''
    });
  };

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
    const { books, term, results } = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={() =>(
          <MyBooksPage
            books={books}
            handleShelfSelect={this.shelfChange}
          />
        )} />
        <Route path="/search" render={({ history }) => (
          <SearchPage
            term={term}
            handleSearchChange={this.onSearchChange}
            handleShelfSelect={(e, book) => {
              this.shelfChange(e, book);
              history.push('/');
              this.clearSearch();
            }}
            results={results}
          />
        )} />
      </div>
    );
  }
}

export default BooksApp;
