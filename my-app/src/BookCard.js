import React from 'react';
import './App.css';

const BookCard = (props) => {
  return(
    <div className="books-container">
        <img className="book-image" src={props.image} alt=""/>
        <div className="desc">
          <h2>{props.title}</h2>
          <h3>{props.author}</h3>
          <p>{props.published}</p>
        </div>
        <button className="checkout">Checkout</button>
    </div>
  );
}

export default BookCard;

