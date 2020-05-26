import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../../CheckoutForm';
import CheckoutCart from '../Checkout/CheckoutCart';


class Checkout extends Component {
  
  render() {
    return (
      <StripeProvider apiKey = {`process.env`}>
        <div className="container ">
            <div className="row checkout_container">     
                <div className="col-sm-6 m-auto">
                    <h4>Checkout</h4>
                    <CheckoutCart/>
                </div>
            </div>
            <div className="row checkout_container">
                <div className="col-sm-6 m-auto">
                   <Elements>
                    <CheckoutForm />
                  </Elements>
              </div>
            </div>
        </div>
      </StripeProvider>
    );
  }
}

export default Checkout;