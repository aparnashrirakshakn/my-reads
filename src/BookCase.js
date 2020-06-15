import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'

export default class BookCase extends Component {
    render() {
        const {bookshelves, books, onChangeShelf} = this.props;
        return (
            <div className="list-books-content">
            <div>
                {bookshelves.map(bookShelf => (
                    <BookShelf key={bookShelf.key} bookshelf={bookShelf} books={books} onChangeShelf={onChangeShelf}/>
                ))}
            </div>
        </div>
        )
    }
}