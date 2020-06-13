import React, { Component } from 'react';
import { ProductConsumer } from '../../context/context';
import {Link} from 'react-router-dom';

class Details extends Component {
    render() { 
        return ( 
            <ProductConsumer>
                {(value)=>{
                     const {id, img, info, price, brand, title ,inCart} = value.detailProduct;
                  return(
                      <div className="container">
                          <div className="row">
                              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                  <h3>{title}</h3>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-8 mx-auto  d-flex justify-content-center align-content-center col-md-6 my-3">
                                  <img src={img} className="img-fluid" alt="product"/>
                              </div>
                              <div className="col-12 mx-auto col-md-6 my-3 text-capitalize">
                                  <h2>Titel: {title}</h2>
                                  <h4 className="text-title text-uppercase">
                                      Brand : <span className="text-uppercase">{brand}</span>
                                  </h4>
                                  <h4 className="text-blue">
                                    <strong>
                                      price: {price} <span>Sek</span>
                                    </strong>
                                  </h4>
                                  <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about product:</p>
                                  <p className="text-muted lead ">{info}</p>
                                  <div>
                                      <Link to="/ethioLeather/productlist">
                                        <button className="btn btn-default add-to-cart mr-3">
                                            Back to products
                                        </button>
                                      </Link>
                                      <Link to="/ethioLeather/cartone">
                                        <button className="btn btn-default add-to-cart" onClick={()=>{value.addToCart(id)}}>{inCart ? "inCart": "Add to cart"}
                                        </button>
                                      </Link>  
                                  </div>
                              </div>
                          </div>
                      </div>
                  );
                }}
            </ProductConsumer>
         );
    }
}
 
export default Details;