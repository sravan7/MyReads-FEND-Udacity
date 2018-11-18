import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input';
import Books from './Books';
import * as BooksAPI from './BooksAPI'
class BookSearch extends Component {
  state = {
    query : "",
    searchedBooks: []
  }
  updateQuery = (query) => {
    this.setState({
      query:query
    })
    this.getSearchedBook(query);
  }

  getSearchedBook = (query) =>{
    if(query) {
      BooksAPI.search(query).then((searchedBooks)=>{
        if(searchedBooks.error) {
            this.setState({searchedBooks: [] });
        }
        else {
            this.setState({searchedBooks: searchedBooks });
            this.filterdBooks();
        }
      })
    }
    else{
      this.setState({searchedBooks: []});
    }
  }
  filterdBooks = () =>{
      this.state.searchedBooks.forEach((value,index,array) => {
        //console.log(value[shelf]);
        value.shelf="none";
        for (let book of this.props.books){
            if(book.id===value.id) {
              array[index] = book;
              console.log("%c matached","color: red");
              break;
            }
        }
      })
  }
  render() {
  //console.log(this.state.searchedBooks);
    return (
                  <div className="search-books">
                    <div className="search-books-bar">
                      <Link  to="/" className="close-search" >Close</Link>
                      <div className="search-books-input-wrapper">
                      <DebounceInput   debounceTimeout={400} type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}  />
                      </div>
                    </div>
                    <div className="search-books-results">
                      <ol className="books-grid">
                        {
                          this.state.searchedBooks.map(searchedBook => (
                            <Books book={searchedBook} moveShelf={this.props.moveShelf} currentPosition={searchedBook.shelf} key={searchedBook.id} />
                          ) )
                      }
                      </ol>
                    </div>
                  </div>
    )
  }

}

export default BookSearch
