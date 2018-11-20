import React, {Component} from 'react';
import Read from './Read'
class ListBooks extends Component{
  render(){
    return(
   <div>
{
   ["currently Reading","want To Read","read"].map((shelf)=>(
     <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <Read book={this.props.books.filter((book)=>(book.shelf===shelf.split(" ").join("")))} moveShelf={this.props.moveShelf}  />
        </div>
    </div>
   ))
}
  </div>
          )
  }
}

export default ListBooks;
