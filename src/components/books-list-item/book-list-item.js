import React from 'react';

import './book-list-item.scss';

const BookListItem = ({ book }) => {
    const { title, author, price, coverImage } = book;

    return (
        <div className="book-list-item">
            <div className="book-list-item">
                <div className="book-list-item__cover">
                    <img src={coverImage} alt="book's cover"/>
                </div>
                <div className="book-list-item__info">
                    <span className="book-list-item__title">{title}</span>
                    <div className="book-list-item__author">{author}</div>
                    <div className="book-list-item__price">${price}</div>
                    <button className="btn btn-info add-to-cart">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default BookListItem;
