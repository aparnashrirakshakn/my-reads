import React, { Component } from 'react'
import './App.css'
import Book from './Book'

export default class BooksSearchResults extends Component {
    render() {
        const { books, searchedBooks, onChangeShelf } = this.props

        const currentBooks = searchedBooks.map(book => {
            books.map(b => {
                if(b.id === book.id) {
                    book.shelf = b.shelf
                }
                return b;
            })
            return book;
        })

        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {currentBooks.map(book => (
                        <Book key={book.id} book={book} bookshelf={book.shelf ? book.shelf : 'none'} onChangeShelf={onChangeShelf}/>
                    ))}
                </ol>
            </div>
        )
    }
}