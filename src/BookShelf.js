import React from 'react';
import { Link } from 'react-router-dom';

import Book from './Book';

class BookShelf extends React.Component {

  render(){
    const { books } = this.props;
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
        {
          currentlyReadingShelf.length > 0 && (
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
                      <Book book={ book } onChangeBookShelf={ this.props.onChangeBookShelf }/>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )
        }
        {
          wantToReadShelf.length > 0 && (
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
                      <Book book={ book } onChangeBookShelf={ this.props.onChangeBookShelf }/>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )
        }
        {
          readShelf.length > 0 && (
            <div className='bookshelf'>
              <div className='bookshelf-title'>
                <h2>
                  Read
                </h2>
              </div>
              <div className='bookshelf-books'>
                {/* <div><Book book={ books[0] } value={ books[0].shelf } onChangeBookShelf={ this.props.onChangeBookShelf.bind(this) }/></div> */}
                <ol className='books-grid'>
                  { readShelf.map(book => (
                    <li key={ book.id }>
                      <Book book={ book } onChangeBookShelf={ this.props.onChangeBookShelf.bind(this) }/>
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

export default BookShelf;
