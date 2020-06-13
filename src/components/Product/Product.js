import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { ProductConsumer } from '../../context/context';

import PropTypes from 'prop-types';


class Product extends Component {
    
    render() { 
        const { id, brand,name, img, price ,inCart } = this.props.product;
        return ( 
            <ProductConsumer>
            {(value) => (
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products" key={id} onClick={() => value.handleDetail(id)}>
                        <div className="productinfo text-center">
                            <Link to={`/ethioLeather/details/${this.props.product.id}/${name}`}>
                                <div> 
                                   <img src={img} alt={brand} />
                                </div>
                                <div style={{background:'#F0F0E9'}}>
                                    <h4 style={{paddingTop: 20}}>{price}</h4>
                                    <p>{name}</p>
                                    <button className="btn btn-default add-to-cart" disabled={inCart ? true : false} onClick={()=>{value.addToCart(id);}}><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                </div>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                </div>
            )}            
        </ProductConsumer>
         );
    }
}
 
Product.propTypes = {
        product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        price: PropTypes.number,
        name: PropTypes.string,
        brand: PropTypes.string,
        inCart: PropTypes.bool
    }).isRequired
}
export default Product;