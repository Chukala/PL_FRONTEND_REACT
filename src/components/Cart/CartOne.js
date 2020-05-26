import React, { Component } from 'react';
import CartColumns from '../Cart/CartColumns';
import EmptyCart from '../Cart/EmptyCart';
import {ProductConsumer} from '../../context/context';
import CartList from '../Cart/CartList';
import CartTotals from '../Cart/CartTotals';

 class CartOne extends Component {
    render() {
        return (
            <section>
             <ProductConsumer>
                 {value =>{
                     const {cart} = value;
                     if(cart.length > 0){
                         return(
                            <React.Fragment>
                               <h3 className="text-center">Cart</h3>
                               <CartColumns />
                               <CartList value={value}/>
                               <CartTotals value={value}/>
                             </React.Fragment>  
                         );
                     } else {
                        return <EmptyCart />
                     }
                 }}
              </ProductConsumer>    
            </section>
        );
    }
}

export default CartOne;