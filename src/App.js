import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BooksList from './BooksList'
import BooksSearch from './BooksSearch'

export default class BooksApp extends Component {
  bookShelves = [
    {key:'currentlyReading' , name:'Currently Reading'},
    {key:'wantToRead' , name:'Want To Read'},
    {key:'read' , name:'Read'}
  ]
  state = {
    books: [],
    searchedBooks: []
  }

  changeShelf = (book, bookshelf) => {
    BooksAPI.update(book, bookshelf);

    let booksOnCurrentShelf = [];
   
    booksOnCurrentShelf = this.state.books.filter(b => b.id !== book.id)

    if(bookshelf !== 'none') {
      book.shelf = bookshelf;
      booksOnCurrentShelf = booksOnCurrentShelf.concat(book)
    }

    this.setState({
      books: booksOnCurrentShelf
    })
  }

  searchBooks = (query) => {
    if(query.length === 0) {
      this.setState({
        searchedBooks: []
      })
    }
    else {
      BooksAPI.search(query).then(books => {
        if(books.error) {
          this.setState({
            searchedBooks: []
          })
        }
        else {
          this.setState({
            searchedBooks: books
          })
        }
      })
    }
  }

  clearSearch = () => {
    this.setState({
      searchedBooks: []
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact 
          path="/" 
          render={() => (<BooksList bookshelves={this.bookShelves} books={this.state.books} onChangeShelf={this.changeShelf}/>)} />
        <Route 
          path="/search" 
          render={() => (<BooksSearch books={this.state.books} searchedBooks={this.state.searchedBooks} onChangeShelf={this.changeShelf} onSearchBooks={this.searchBooks} onClearSearch={this.clearSearch}/>)} />
      </div>
    )
  }
}

