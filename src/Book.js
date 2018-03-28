import React from 'react';
import PropTypes from 'prop-types';

// TODO: Comment on component
class Book extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      value: this.props.book.shelf
    }
    this._onChange = this._onChange.bind(this);
  }

  // TODO: Comment on function
  _onChange(event){
    this.setState({value: event.target.value});
    this.props.onChangeBookShelf(this.props.book, event.target.value);
  }

  render() {
    const { book } = this.props;

    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${book.imageLinks.thumbnail})`
          }}></div>
          <div className="book-shelf-changer">
            <select onChange={ this._onChange } value={this.state.value} >
              <option value='move' disabled>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{ book.title }</div>
        <div className='book-authors'>{ book.authors }</div>
      </div>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
}
export default Book
