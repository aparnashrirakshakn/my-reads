import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default class BooksSearchCloseButton extends Component {
    render() {
        const { onClearSearch } = this.props
        return (
            <Link to='/'>
                <button className='close-search' style={{border: 'none'}} onClick={onClearSearch}>
                    Close
                </button>
            </Link>
        )
    }
}