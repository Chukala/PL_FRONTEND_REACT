// CheckoutForm.js
import React,{ Component } from 'react';
import {injectStripe} from 'react-stripe-elements';

import AddressSection from './components/Checkout/AddressSection';
import CardSection from './components/Checkout//CardSection';
//import CheckoutCart from './components/Checkout/CheckoutCart';

class CheckoutForm extends Component{
 constructor(props) {
    super(props);
  this.state = {
      complete: false,
    };
  this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: token.id
        //cartTotal: cartTotal
    });

  if (response.ok) this.setState({complete: true});
}

 handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();
  };

  render() {
      
      if (this.state.complete) return <h1>Purchase Complete Check emails for details</h1>;
      
    return (
    <div className="container">
       <div className="row">
      <form onSubmit={this.handleSubmit}>
        <AddressSection />
        <CardSection />
        <button onClick={this.submit} className="btn btn-default check_out">Confirm order</button>
      </form>
      </div>
    </div>
     );
      
  }
}

export default injectStripe(CheckoutForm);