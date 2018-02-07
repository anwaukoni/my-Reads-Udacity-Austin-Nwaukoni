import React from 'react';
import { Link } from 'react-router-dom';

import Book from './Book';

class BookShelves extends React.Component {

  render(){
    const { books } = this.props;
    const currentlyReading = books.filter( book => book.shelf === 'currentlyReading');
    const wantToRead = books.filter( book => book.shelf === 'wantToRead');
    const read = books.filter( book => book.shelf === 'read');

    console.log(read);

    return (
      <div>
        <div className='list-books-title'>
          <h1>
            Currently Reading
          </h1>
        </div>
        {
          currentlyReading.length > 0 && (
            <div className='bookshelf'>
              <div className='bookshelf-title'>
                <h2>
                  Currently Reading
                </h2>
              </div>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  { currentlyReading.map(book => (
                    <li key={ book.id }>
                      <Book book={ book }/>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )
        }
        {
          wantToRead.length > 0 && (
            <div className='bookshelf'>
              <div className='bookshelf-title'>
                <h2>
                  Want to Read
                </h2>
              </div>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  { wantToRead.map(book => (
                    <li key={ book.id }>
                      <Book book={ book }/>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )
        }
        {
          read.length > 0 && (
            <div className='bookshelf'>
              <div className='bookshelf-title'>
                <h2>
                  Read
                </h2>
              </div>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  { read.map(book => (
                    <li key={ book.id }>
                      <Book book={ book }/>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )
        }
        <div className='open-search'>
          <Link
            to='/search'/>
        </div>
      </div>
    )
  }
}

export default BookShelves;
