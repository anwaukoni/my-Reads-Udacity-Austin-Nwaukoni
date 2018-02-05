import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

import './App.css';

import BookSearch from './BookSearch';
import BookShelves from './BookShelves';

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount(){
    BooksAPI.getAll().then(books => this.setState({ books: books }));
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <Route exact path='/' render={() => (
          <BookShelves books={ books }/>
        )}/>
        <Route path='/search' render={() => (
          <BookSearch books={ books }/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
