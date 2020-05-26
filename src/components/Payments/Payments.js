import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../../CheckoutForm';

class Payments extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_GjHGWsdXvpBeZLAfSqDeoVUt00qHEzWz8z">
        <div className="example">
          <h4>Payments</h4>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Payments;