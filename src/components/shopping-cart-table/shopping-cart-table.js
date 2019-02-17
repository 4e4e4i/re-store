import React from 'react';

import './shopping-cart-table.scss';

const ShoppingCartTable = () => {
    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Site Reliability Engineering</td>
                        <td>2</td>
                        <td>$40</td>
                        <td className="shopping-cart-table__btns">
                            <button className="btn btn-outline-danger btn-sm">
                                <i className="fa fa-trash-o" />
                            </button>
                            <button className="btn btn-outline-success btn-sm">
                                <i className="fa fa-plus-circle" />
                            </button>
                            <button className="btn btn-outline-warning btn-sm">
                                <i className="fa fa-minus-circle" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="shopping-cart-table__total">
                Total: $201
            </div>
        </div>
    );
};

export default ShoppingCartTable;
