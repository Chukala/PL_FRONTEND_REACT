import React from 'react';
import './cart.css';
import {Link} from 'react-router-dom';

export default function EmptyCart() {
    return (
        <div id="empty_cart_items">
            <div className="container">
                <div><h3>Cart</h3></div>
                <div className="empty_cart_info">
                    <table className="table table-condensed">
                        <thead>
                            <tr className="empty_cart_menu">
                                <td className="description"><i className="fa fa-shopping-cart pr-3"></i><span>Your cart is currently empty.</span></td>   
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="empty_cart_description">
                                    <Link to="/productlist" className="btn btn-default back_to_shop">Return to Shop</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
    )
}
