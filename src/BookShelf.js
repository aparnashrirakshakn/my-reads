import React, { Component } from "react";
import './App.css'
import Book from './Book'

export default class BookShelf extends Component {
    render() {
        const { bookshelf, books, onChangeShelf } = this.props
        const currentShelfBooks = books.filter(book => book.shelf === bookshelf.key)

        return(
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>{bookshelf.name}</h2>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                      {currentShelfBooks.map(book => (
                          <Book key={book.id} book={book} bookshelf={bookshelf.key} onChangeShelf={onChangeShelf} />
                      ))}
                    </ol>
                </div>
            </div>
        )
    }
}