import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default class BooksSearchOpenButton extends Component {
    render() {
        return (
            <div className="open-search">
                <Link to="search">
                    <button>Add a book</button>
                </Link>
            </div>
        )
    }
}