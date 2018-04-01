import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

function BookShelf(props) {
  const { books } = props;
  const currentlyReadingShelf = books.filter( book => book.shelf === 'currentlyReading');
  const wantToReadShelf = books.filter( book => book.shelf === 'wantToRead');
  const readShelf = books.filter( book => book.shelf === 'read');

  return (
    <div>
      <div className='list-books-title'>
        <h1>
          MyReads
        </h1>
      </div>
      { currentlyReadingShelf.length > 0 && (
        <Shelf
          shelfName='currently Reading'
          shelf={ currentlyReadingShelf }
          onChangeBookShelf={ props.onChangeBookShelf }/>
      )}
      { wantToReadShelf.length > 0 && (
        <Shelf
          shelfName='Want to Read'
          shelf={ wantToReadShelf }
          onChangeBookShelf={ props.onChangeBookShelf }/>
      )}
      { readShelf.length > 0 && (
        <Shelf
          shelfName='Read'
          shelf={ readShelf }
          onChangeBookShelf={ props.onChangeBookShelf }/>
      )}
      <div className='open-search'>
        <Link
          to='/search'/>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
}

export default BookShelf;
