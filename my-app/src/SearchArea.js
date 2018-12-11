import React from 'react';
import './App.css';

const SearchArea = (props) => {
  return(
    <div className="searcharea">
      <form onSubmit={props.searchBooks} action="">
        <input onChange={props.handleSearch} placeholder='Search Books' type="text"/>
        <button type="submit" className="submitButton">Search</button>
      </form>
      <div className="seperator">
        <div className="seperator-text">
          <span>booklist</span>
          <h1>Most Popular</h1>
          <p>Richland Library Wednesday, Dec 13</p>
        </div>
      </div>
    </div>
    
  );
}
export default SearchArea;
