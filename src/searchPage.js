import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import {DebounceInput} from 'react-debounce-input';
import Read from './Read'
class SearchPage extends Component{
  state = {
    query: "",
    searchResults:[]
  }
  getSearchedBooks = (query) =>{
    this.setState({query:query})
    if (query.length>2){
      BooksAPI.search(query).then((response)=>{
        //console.log(response);
        if(!response){
          this.setState({searchResults:[]})
        }
        else {
            //this.setState({searchResults : response})
            this.state.searchResults = response;
            this.setState({searchResults:this.filterdBooks()})
          }
      })
    }
  }

  filterdBooks = () =>{
      this.state.searchResults.forEach((value,index,array) => {
        //console.log(value[shelf]);
        value.shelf="none";
        for (let book of this.props.books){
            if(book.id===value.id  && book.title===value.title) {
              array[index] = book;
              //console.log("%c matached","color: red");
              break;
            }
        }
      })
    return this.state.searchResults
  }
  render(){
    //console.log(this.state.searchResults);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <DebounceInput minLength={2}  debounceTimeout={400} type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.getSearchedBooks(event.target.value)}  />
          </div>
        </div>
        <div className="search-books-results">
          <Read book={this.state.searchResults} moveShelf={this.props.moveShelf} />
        </div>
      </div>
    )
  }
}

export default SearchPage;
