import React, { Component } from 'react';
import CheckoutCartColumns from '../Checkout/CheckoutCartColumns';
import EmptyCart from '../Cart/EmptyCart';
import {ProductConsumer} from '../../context/context';
import CheckoutCartList from '../Checkout/CheckoutCartList';
import CheckoutCartTotals from '../Checkout/CheckoutCartTotals';

 class CheckoutCart extends Component {
    render() {
        return (
            <section>
             <ProductConsumer>
                 {value =>{
                     const {cart} = value;
                     if(cart.length > 0){
                         return(
                            <React.Fragment>
                               <CheckoutCartColumns />
                               <CheckoutCartList value={value}/>
                               <CheckoutCartTotals value={value} history={this.props.history}/>
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

export default CheckoutCart;