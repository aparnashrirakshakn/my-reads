import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'

export default class BooksApp extends React.Component {
  state = {}

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ BooksList } />
        <Route path="/search" component={ BooksSearch } />
      </div>
    )
  }
}

