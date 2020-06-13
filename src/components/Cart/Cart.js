import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './cart.css';


class Cart extends Component{
    
    render(){
        const { cartItems } = this.props;
        return(
        <section >
          {((cartItems === undefined) || (cartItems.length === 0)) ?
                <div id="empty_cart_items" style={{marginBottom: 300}}>
                    <div className="container" >
                        <div><h3>Cart</h3></div>
                        <div className="empty_cart_info" >
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
             : <div className="cart_with_items">
                <div id="cart_items">
                <div className="container">
                    <div><h3>you have {cartItems.length} products in the Cart</h3></div>
                     <div className="cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image"></td>
                                    <td className="description">Product</td>
                                    <td className="price">Price</td>
                                    <td className="quantity">Quantity</td>
                                    <td className="total">Total</td>
                                    <td></td>
                                </tr>
                            </thead>
                            {cartItems.length > 0 &&
                            <tbody>
                            {cartItems.map(item =>
                                <tr>
                                    <td className="cart_product">
                                        <Link to="/ethioLeather"><img src={item.img} alt="cart-img"/></Link>
                                    </td>
                                    
                                    <td className="cart_description">
                                        <p>{item.title} <span>x {item.count}</span></p>      
                                    </td>
                                    <td className="cart_price">
                                        <p className="cart_price">{item.price}</p>
                                    </td>
                                    <td className="cart_quantity">   
									 <p className="cart_quantity">{item.count}</p>   
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">{item.count*item.price}</p>
                                    </td>
                                    <td className="cart_delete">
                                        <button className="cart_quantity_delete" onClick={(e) => this.props.handleRemoveFromCart(e, item)}><i className="fa fa-times"></i></button>
                                    </td>
                                </tr>
                             )}
                            </tbody>
                         }
                        </table>
                    </div>
                </div>
               </div> 
               <div id="do_action">
                <div className="container">
                        <div className="row">
                            <div className="col-sm-6"></div>
                            <div className="col-sm-6">
                                <div><h3>Cart totals</h3></div>
                                <div className="total_area">
                                        <ul>
                                            <li>Cart Sub Total<span>{cartItems.reduce((a,c) => a + c.price * c.count, 0)}</span></li>
                                            <li>Shipping Cost <span>Free</span></li>
                                            <li>Total <span>{cartItems.reduce((a,c) => a + c.price * c.count, 0)}</span></li>
                                        </ul>
                                        <Link className="btn btn-default check_out" to="/ethioLeather/checkout" cartItems={cartItems}>Check Out</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
             </div>
          }
        </section>
        )
    }

}

export default Cart;