import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function Shelf ({ shelfName, shelf, onChangeBookShelf  }){
  return (
    <div className='bookshelf'>
      <div className='bookshelf-title'>
        <h2>
          { shelfName }
        </h2>
      </div>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          { shelf.map(book => (
            <li key={ book.id }>
              <Book book={ book } onChangeBookShelf={ onChangeBookShelf }/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

Shelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  shelf: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
}
export default Shelf;
