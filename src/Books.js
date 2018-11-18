import React, {Component} from 'react';
class Books extends Component{

  render() {
    //console.log(this.props.book);
    const image = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : "https://dummyimage.com/128x193/2e7c31/fff.png&text=Cover+Missing";
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url("${image}")` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(event) => this.props.moveShelf(this.props.book, event.target.value )
            } value={this.props.currentPosition} >
              <option  value="move" select="selected"  >Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title"> {this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors ? this.props.book.authors.join(", "): ""}</div>
        {/*<div className="book-descritpion">{this.props.book.description}</div>*/}
        <div className="book-ratings">Avg Rating:{this.props.book.averageRating} </div>
      </div>

    )
  }

}

export default Books
