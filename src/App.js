import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

import './App.css';

import BookSearch from './BookSearch';
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  constructor(props, context){
    super(props, context);

    this._changeBookShelf = this._changeBookShelf.bind(this);
    this.state = {
      books: [],
    }
  }

  componentDidMount(){
    BooksAPI.getAll().then(books => this.setState({ books: books }));
  }

  _changeBookShelf(book, newShelf){
    this.setState((prevState)=> {
      let changeBook = prevState.books.find(stateBook => stateBook.id === book.id);
      changeBook.shelf = newShelf;

      return changeBook;
    });
    BooksAPI.update(book, newShelf);
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <Route exact path='/' render={() => (
          <BookShelf books={ books } onChangeBookShelf={ this._changeBookShelf } />
        )}/>
        <Route path='/search' render={() => (
          <BookSearch books={ books } onChangeBookShelf={ this._changeBookShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
