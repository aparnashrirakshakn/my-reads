import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'

export default class BookCase extends Component {
    render() {
        return (
            <div className="list-books-content">
            <div>
                <BookShelf />
            </div>
        </div>
        )
    }
}