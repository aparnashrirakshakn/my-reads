import React, { Component } from 'react'
import './App.css'
import BooksSearchCloseButton from './BooksSearchCloseButton'
import BooksSearchInput from './BooksSearchInput'

export default class BooksSearchBar extends Component {
    render() {
        const { onSearchBooks, onClearSearch } = this.props

        return(
            <div className='search-books-bar'>
                <BooksSearchCloseButton onClearSearch={onClearSearch}/>
                <BooksSearchInput onSearchBooks={onSearchBooks}/>
            </div>
        )
    }
}