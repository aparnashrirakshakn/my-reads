import React, { Component } from 'react'
import './App.css'
import BookCase from './BookCase'
import BooksSearchOpenButton from './BooksSearchOpenButton'

export default class BooksList extends Component {
    render() {
      const {bookshelves, books, onChangeShelf} = this.props;
      return (
        <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <BookCase bookshelves={bookshelves} books={books} onChangeShelf={onChangeShelf}/>
        <BooksSearchOpenButton />
    </div>
      )
    }
  }