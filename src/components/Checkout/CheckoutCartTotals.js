import React from 'react';
//import Checkout from '../Checkout/Checkout';
//import {Link} from 'react-router-dom';

export default function CheckoutCartTotals({value, history}) {
    const{cartSubTotal, cartTax, cartTotal} = value;
    return (
        <React.Fragment>
            <div className="container">
              <div className="row">
                  <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                     <h5><span className="text-title">Subtotal : </span>
                       <strong> {cartSubTotal} Sek</strong>
                     </h5>
                     <h5><span className="text-title">Tax : </span>
                       <strong> {cartTax} Sek</strong>
                     </h5>
                     <h5><span className="text-title">Total : </span>
                       <strong> {cartTotal} Sek</strong>
                     </h5>
                     {/*<Checkout total={cartTotal} history={history}/>*/}
                  </div>
              </div>
             {/* <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
                  <Link className="btn btn-default check_out mr-3 text-right" to="/checkout" value={value}>Proceed to Check Out</Link>
                </div>
              </div>*/}
            </div>
        </React.Fragment>
    );
}
