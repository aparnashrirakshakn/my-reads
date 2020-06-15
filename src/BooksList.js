import React, { Component } from 'react'
import './App.css'
import { BookCase } from './BookCase'
import { BooksSearchOpenButton } from './BooksSearchOpenButton'

export default class BooksList extends Component {
    render() {
      return (
        <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <BookCase />
        <BooksSearchOpenButton />
    </div>
      )
    }
  }