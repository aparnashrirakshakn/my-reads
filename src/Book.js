import React, { Component } from "react";
import './App.css'
import BookshelfChanger from "./BookshelfChanger";

export default class Book extends Component {
    render() {
        const {book, bookshelf, onChangeShelf} = this.props
        return(
            <li>
                <div className="book">
                        <div className="book-top">
                        <div className="book-cover"     
                             style={{ width: 128, 
                                      height: 193, 
                                      backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'icons/default-cover.png'})`
                                    }}></div>
                        <BookshelfChanger book={book} bookshelf={bookshelf} onChangeShelf={onChangeShelf} />
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors ? book.authors.join(', ') : 'Author Unknown'}</div>
                    </div>
            </li>
        )
    }
}