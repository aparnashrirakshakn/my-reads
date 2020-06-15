import React, { Component } from 'react';
import './App.css'

export default class BookshelfChanger extends Component {
    state = {
        bookshelf: this.props.bookshelf
    }

    handleChange = event => {
        this.setState({
            bookshelf: event.target.value
        })
        this.props.onChangeShelf(this.props.book, event.target.value)
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.state.bookshelf} onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
        )
    }
}