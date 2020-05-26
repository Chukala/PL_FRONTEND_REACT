import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { ProductConsumer } from '../../context/context';

import PropTypes from 'prop-types';


class ProductOne extends Component {
    
    render() { 
        const { id, brand,name, img, price ,inCart } = this.props.product;
        return ( 
            <ProductConsumer>
            {(value) => (
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products" onClick={() => value.handleDetail(id)}>
                        <div className="productinfo text-center">
                            <Link to="/details">
                                <img src={img} alt={brand} />
                                <h4>{price}</h4>
                                <p>{name}</p>
                            </Link>
                            <button className="btn btn-default add-to-cart" disabled={inCart ? true : false} onClick={()=>{value.addToCart(id);}}><i className="fa fa-shopping-cart"></i>Add to cart</button>
                        </div>
                    </div>
                </div>
                </div>
            )}            
        </ProductConsumer>
         );
    }
}
 
ProductOne.propTypes = {
        product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        price: PropTypes.number,
        name: PropTypes.string,
        brand: PropTypes.string,
        inCart: PropTypes.bool
    }).isRequired
}
export default ProductOne;