import React from 'react';
import { Route } from 'react-router-dom';
// import debounce from 'lodash/debounce';
import * as BooksAPI from './BooksAPI';

import './App.css';

import BookSearch from './BookSearch';
import BookShelf from './BookShelf';

  // TODO: Comment on component
class BooksApp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      books: [],
    }
    this._changeBookShelf = this._changeBookShelf.bind(this);
    this._searchBooks = this._searchBooks.bind(this);
  }

  // TODO: Comment on lifecycle method
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books: books }));
  }

  _searchBooks(query) {
    BooksAPI.search(query, 20).then(
      books => {
        // console.log(books);
          books.map(book => {
          book.shelf = 'none';
        })
        console.log(books);
      }
    );

  }
  // TODO: Comment on function
  _changeBookShelf(book, newShelf) {
    this.setState((prevState)=> {
      let changeBook = prevState.books.find(stateBook => stateBook.id === book.id);
      changeBook.shelf = newShelf;

      return changeBook;
    });
    BooksAPI.update(book, newShelf);
  }

  // TODO: Comment on rendering
  render() {
    const { books } = this.state;
    return (
      <div>
        <Route exact path='/' render={() => (
          <BookShelf books={ books } onChangeBookShelf={ this._changeBookShelf } />
        )}/>
        <Route path='/search' render={() => (
          <BookSearch books={ books } onSearch={ this._searchBooks } onChangeBookShelf={ this._changeBookShelf }/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
