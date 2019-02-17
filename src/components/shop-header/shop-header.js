import React from 'react';
import { Link } from 'react-router-dom';

import './shop-header.scss';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="shop-header__logo text-dark">ReStore</div>
            </Link>
            <Link to="/cart">
                <div className="shop-header__cart">
                    <i className="shop-header__cart-icon fa fa-shopping-cart" />
                    {numItems} items (${total})
                </div>
            </Link>
        </header>
    );
};

export default ShopHeader;
