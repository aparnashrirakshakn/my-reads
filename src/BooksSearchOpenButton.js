import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './BookCase'

export default class BooksSearchOpenButton extends Component {
    render() {
        return (
            <div className="open-search">
                <a>Add a book</a>
            </div>
        )
    }
}