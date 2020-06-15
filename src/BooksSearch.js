import React, { Component } from 'react'
import './App.css'
import BooksSearchBar from './BooksSearchBar'
import BooksSearchResults from './BooksSearchResults'

export default class BooksSearch extends Component {
    render() {
      const { books, searchedBooks, onSearchBooks, onClearSearch, onChangeShelf } = this.props
      return (
        <div className="search-books">
          <BooksSearchBar onSearchBooks={onSearchBooks} onClearSearch={onClearSearch}/>
          <BooksSearchResults books={books} searchedBooks={searchedBooks} onChangeShelf={onChangeShelf}/>
      </div>
      )
    }
  }