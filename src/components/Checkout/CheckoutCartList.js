import React from 'react';
import CheckoutCartItem from '../Checkout/CheckoutCartItem';

export default function CheckoutCartList({value}) {
    const {cart} = value;
    return (
        <div className="container-fluid">
          {cart.map(item => {
              return <CheckoutCartItem key={item.id} item={item}/>
          })}   
        </div>
    );
}
