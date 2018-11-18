import React from 'react';
import './App.css';
import BookSelf from './BookSelf';
import BookSearch from './BookSearch';
import noMatch from './noMatch';
import * as BooksAPI from './BooksAPI';
import {Switch,Route} from 'react-router-dom';
class BooksApp extends React.Component {
  state = {
    books:[]
  }

  getBook = () => {
    BooksAPI.getAll().then((books)=>{
      this.setState({books : books})
      // console.log(books)
     })
  }
  componentDidMount(){
    this.getBook();
  }
 moveShelf = (book,shelf )=> {
  BooksAPI.update(book,shelf).then((resolve) => this.getBook());
    // console.log(books)
};
  render() {
    //console.log(this.state.books);
    return (

      <div className="app">
        <Switch>
          <Route exact path="/" render={() => ( <BookSelf books={this.state.books} moveShelf= {this.moveShelf} /> )} />
          <Route path="/search" render={() => (<BookSearch books={this.state.books} moveShelf={this.moveShelf} /> )} />
          <Route component={noMatch} />
        </Switch>
            {/* <Route excat path="/" component={BookSelf}/>
              <Route   path="/search" component={BookSearch}/> --> */}
      </div>
    )
  }
}

export default BooksApp
