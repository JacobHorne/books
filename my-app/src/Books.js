import React, { Component } from 'react';
import SearchArea from './SearchArea';
import request from 'superagent';
import BookList from './BookList';
import './App.css';

class Books extends Component {
  constructor(props){
    super(props);
    this.state = {
      books:[],
      searchField:''
    }
  }

  handleSearch = (e) => {
    console.log(this.state.searchField);
    this.setState({ searchField: e.target.value})
  }

  searchBooks = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q:this.state.searchField})
      .then((data) => {
        this.setState(
          {
            books: [...data.body.items]
          }
        ) 
      })
  } 

  render() {
    return (
      <div>
        <SearchArea searchBooks={this.searchBooks} handleSearch = {this.handleSearch}/>
        <BookList books={this.state.books}/>
      </div>
    );
  }
}

export default Books;
