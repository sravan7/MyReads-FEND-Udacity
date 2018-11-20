import React from 'react'
import noMatch from './noMatch';
import {Switch,Route} from 'react-router-dom';
import './App.css'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import SearchPage from './searchPage'
class BooksApp extends React.Component {
  state = {
    books:[]
  }
  getBooks = () => {
    BooksAPI.getAll().then((books)=>{
      this.setState({books : books})
      console.log(this.state.books);
    }).catch((error) => {console.log(error);})
  }
  componentDidMount(){
      this.getBooks();
  }
  moveShelf = (book,shelf )=> {
   BooksAPI.update(book,shelf).then((resolve)=>{this.getBooks()});
      //console.log(book)
 };
  render() {
    return (
      <div className="app">
      <Switch>
        <Route exact path="/" render={() => ( <BookShelf books={this.state.books} moveShelf={this.moveShelf} /> )} />
        <Route path="/search" render={() => (  <SearchPage books={this.state.books} moveShelf={this.moveShelf} /> )} />
        <Route component={noMatch} />
      </Switch>
      </div>
    )
  }
}

export default BooksApp
