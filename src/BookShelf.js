import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Book from './Book';

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
        <div className='bookshelf'>
          <div className='bookshelf-title'>
            <h2>
              Currently Reading
            </h2>
          </div>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              { currentlyReadingShelf.map(book => (
                <li key={ book.id }>
                  <Book book={ book } onChangeBookShelf={ props.onChangeBookShelf }/>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
      { wantToReadShelf.length > 0 && (
        <div className='bookshelf'>
          <div className='bookshelf-title'>
            <h2>
              Want to Read
            </h2>
          </div>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              { wantToReadShelf.map(book => (
                <li key={ book.id }>
                  <Book book={ book } onChangeBookShelf={ props.onChangeBookShelf }/>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
      { readShelf.length > 0 && (
        <div className='bookshelf'>
          <div className='bookshelf-title'>
            <h2>
              Read
            </h2>
          </div>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              { readShelf.map(book => (
                <li key={ book.id }>
                  <Book book={ book } onChangeBookShelf={ props.onChangeBookShelf }/>
                </li>
              ))}
            </ol>
          </div>
        </div>
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
