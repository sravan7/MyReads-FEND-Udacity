import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import BookSelf from './BookSelf';
import BookSearch from './BookSearch';
import * as BooksAPI from './BooksAPI';
import {Route} from 'react-router-dom';
class BooksApp extends React.Component {
  state = {
    books:[]
  }


  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books : books})
      // console.log(books)
     })
  }
 moveShelf = (book,shelf )=> {
  BooksAPI.update(book,shelf);
  BooksAPI.getAll().then((books)=>{
    this.setState({books : books})
    // console.log(books)
   })
    // console.log(books)
};
  render() {
    //console.log(this.state.books);
    return (

      <div className="app">

        <Route exact path="/" render={() => ( <BookSelf books={this.state.books} moveShelf= {this.moveShelf} /> )} />
        <Route path="/search" render={() => (<BookSearch books={this.state.books} moveShelf={this.moveShelf} /> )} />
            {/* <Route excat path="/" component={BookSelf}/>
              <Route   path="/search" component={BookSearch}/> --> */}
      </div>
    )
  }
}

export default BooksApp
