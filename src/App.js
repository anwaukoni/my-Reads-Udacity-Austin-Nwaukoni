import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

import './App.css';

import BookSearch from './BookSearch';
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      books: [],
    }
    this._changeBookShelf = this._changeBookShelf.bind(this);
    this._searchBooks = this._searchBooks.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books: books }));
  }

  _searchBooks(query) {
    if ( query.length > 0){
      BooksAPI.getAll().then(books => this.setState({ books: books }))

      BooksAPI.getAll()
      .then( booksInShelf => {
        let catalogouedBooks = booksInShelf;

        BooksAPI.search(query, 20)
        .then(newBooks => {
          let newBooksSearch = newBooks;

          if (newBooksSearch.length > 0){
            const uniqueBooksList = newBooksSearch.filter(newBook => {
              return !(catalogouedBooks.find(book => book.id === newBook.id));
            });

            uniqueBooksList.map(book => book['shelf'] = 'none');

            return this.setState(() => ({
              books: this.state.books.concat(uniqueBooksList)
            }));

          } else {
            return null
          }
        })
      });
    } else {
      return null;
    }
  }

  _changeBookShelf(newBookState, newShelf) {
    this.setState((prevState)=> {
      let addNewShelf = prevState.books.find(prevBookState => prevBookState.id === newBookState.id);
      addNewShelf.shelf = newShelf;

      return addNewShelf;
    });
    BooksAPI.update(newBookState, newShelf);
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <Route exact path='/' render={() => (
          <BookShelf books={ books } onChangeBookShelf={ this._changeBookShelf } />
        )}/>
        <Route path='/search' render={() => (
          <BookSearch  books={ books } onSearch={ this._searchBooks } onChangeBookShelf={ this._changeBookShelf }/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
