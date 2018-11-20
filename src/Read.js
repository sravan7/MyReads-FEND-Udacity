import React, {Component} from 'react';

class Read extends Component{

  render(){
//console.log(this.props.book)
    return (

      <ol className="books-grid" key={this.props.keyID} >
      {
        this.props.book.map((book)=>{
          //console.log(book.id);
        let image = book.imageLinks ? book.imageLinks.thumbnail : "https://dummyimage.com/128x193/2e7c31/fff.png&text=Cover+Missing" ;
        return <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${image}")` }}></div>
                <div className="book-shelf-changer">
                  <select onChange={(event) =>{this.props.moveShelf(book, event.target.value)} } value={book.shelf} >
                    <option value="move" select="selected" >Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors ? book.authors.join(", "): ""}</div>
              <div className="book-ratings">Avg Rating:{book.averageRating} </div>
            </div>
          </li>;
        })
      }
      </ol>

    )
  }
}

export default Read;
