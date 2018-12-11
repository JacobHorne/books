import React from 'react';
import './App.css';

const SearchArea = (props) => {
  return(
    <div className="searcharea">
      <form onSubmit={props.searchBooks} action="">
        <input onChange={props.handleSearch} type="text"/>
        <button type="submit" className="submitButton">Search</button>
      </form>
    </div>
  );
}

export default SearchArea;
