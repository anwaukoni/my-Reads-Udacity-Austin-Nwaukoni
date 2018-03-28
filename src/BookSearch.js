import React from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import { Link } from 'react-router-dom';
import debounce from 'lodash/debounce'

import Book from './Book';

class BookSearch extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      query: ''
    }
    this._debounceOnSearch = debounce(this.props.onSearch,  1000);
  }

  _updateQuery(event) {
    this.setState({ query: event.target.value });
    this._debounceOnSearch(event.target.value);
  }

  render() {
    const { books } = this.props;
    const { query } = this.state;
    let showingBooks;

    if (query) {
        const matchingBook = new RegExp(escapeRegExp(query), 'i');
        showingBooks = books.filter(
          book => matchingBook.test(book.title) || matchingBook.test(book.authors) || matchingBook.test(book.subtitle)
        )
    }

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link
            className='close-search'
            to='/'
          />
          <input
            name = 'bookSearch'
            className='search-books-input-wrapper'
            placeholder='Search by title or author'
            value={ this.state.query }
            onChange={ event => this._updateQuery(event) }
          />
        </div>
        { showingBooks && (
          <div className='search-books-results'>
            <div className='bookshelf'>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  { showingBooks.map(book => (
                    <li key={ book.id }>
                      <Book book={ book } value={ book.shelf } onChangeBookShelf={ this.props.onChangeBookShelf }/>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

BookSearch.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
}
export default BookSearch;
