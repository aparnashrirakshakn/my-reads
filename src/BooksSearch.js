import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

export default class BooksSearch extends Component {
    render() {
      return (
        <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search">Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
  
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
      )
    }
  }