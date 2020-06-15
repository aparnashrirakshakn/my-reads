import React, { Component } from 'react'
import './App.css'

export default class BooksSearchInput extends Component {
    state = {
      searchedValue: ''
    }

    handleChange = (event) => {
      const value = event.target.value;
      this.setState({searchedValue: value}, () => {
        this.props.onSearchBooks(value)
      })
    }
    render() {
      return(
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" value={this.state.searchedValue} onChange={this.handleChange}/>
        </div>
      )
    }
}